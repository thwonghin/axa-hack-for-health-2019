import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import Sentiment from 'sentiment';
import ColorThief from 'colorthief'
import { isSameDay, differenceInMonths, parseISO } from 'date-fns';

import loading from 'assets/loading.svg';
import { usePushHistory } from 'libs/hooks';
import { store } from '../../store';
import style from './index.module.scss';

function getBase64(url) {
    return axios
      .get(
        url,
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        return "data:;base64," + base64;
      });
  }

const ProcessPage = () => {
    const [medias, setMedias] = useState([]);
    const history = useHistory();

    const restart = useCallback(
        () => {
            window.location.href = window.location.href.replace(/(.*\/)[^\\/]+$/, '$1');
        },
        [],
    );

    useEffect(
        () => {

            async function assignMediasFromApiData(apiData, results, initMediaDate, lastMediaDate = null) {
                const rawMedias = apiData.data;

                rawMedias.forEach((rawMedia) => {
                    const hashTags = (rawMedia.caption || '').match(/\B#\S\S+/gm) || [];
                    results.push({
                        ...rawMedia,
                        hash_tags: hashTags,
                    });
                });

                if (!apiData.paging.next || differenceInMonths(initMediaDate, lastMediaDate) >= 3) {
                    return;
                }

                const { data } = await axios.get(apiData.paging.next);
                await assignMediasFromApiData(data, results, initMediaDate, lastMediaDate);
            }

            async function run() {
                try {
                    const results = [];

                    const { data } = await axios.get(
                        'https://graph.instagram.com/me/media',
                        {
                            params: {
                                fields: 'id,caption,media_url,timestamp',
                                access_token: store.ig.accessToken,
                            },
                        },
                    );

                    await assignMediasFromApiData(data, results, parseISO(data.data[0].timestamp));
                    setMedias(results);
                    const timeout = new Promise((rs) => setTimeout(rs, 5000));
                    const [result] = await Promise.all([
                        analyze(results),
                        timeout,
                    ]);
                    if (Number.isNaN(result.captionSentimentScore) && Number.isNaN(result.imageSentimentScore)) {
                        history.push('/reward');
                        return;
                    }
                    if (!Number.isNaN(result.captionSentimentScore) && Number.isNaN(result.imageSentimentScore)) {
                        if (result.captionSentimentScore < 0) {
                            history.push(`/phycho?captionSentimentScore=${result.captionSentimentScore}`);
                        } else {
                            history.push('/reward');
                        }
                        return;
                    }
                    if (Number.isNaN(result.captionSentimentScore) && !Number.isNaN(result.imageSentimentScore)) {
                        if (result.imageSentimentScore < 0) {
                            history.push(`/phycho?imageSentimentScore=${result.imageSentimentScore}`);
                        } else {
                            history.push('/reward');
                        }
                        return;
                    }
                    if (!Number.isNaN(result.captionSentimentScore) && !Number.isNaN(result.imageSentimentScore)) {
                        if (result.imageSentimentScore < 0 || result.captionSentimentScore < 0) {
                            history.push(`/phycho?imageSentimentScore=${result.imageSentimentScore}&captionSentimentScore=${result.captionSentimentScore}`);
                        } else {
                            history.push('/reward');
                        }
                        return;
                    }
                } catch (err) {
                    // restart();
                    console.log(err);
                }
            }

            async function analyze(results) {
                console.log('------ analyze ------');

                console.dir(results);
                const options = {
                    extras: {
                        'axa': 1,
                        'worry': -1,
                        'stressed': -1,
                        'bad': -1,
                        'busy': -1,
                        'afraid': -1,
                        'negative': -1,
                        'thinking': -1,
                        'intense': -1,
                        'nervous': -1,
                    }
                };
                const sentiment = new Sentiment();
                const colorThief = new ColorThief();
                const imagesPalette = await Promise.all(results.map(r => getImagePalette(r.media_url, colorThief)));
                const { totalImageSentiment, totalAbsImageSentiment } = imagesPalette.map((palettes) => {
                    const a = palettes.reduce((acc, curr) => acc + getPaletteScore(curr), 0);
                    const b = palettes.reduce((acc, curr) => acc + Math.abs(getPaletteScore(curr)), 0);

                    return {
                        totalImageSentiment: a,
                        totalAbsImageSentiment: b,
                    };
                })
                    .reduce((acc, cur) => {
                        return {
                            totalImageSentiment: cur.totalImageSentiment + acc.totalImageSentiment,
                            totalAbsImageSentiment: cur.totalAbsImageSentiment + acc.totalAbsImageSentiment,
                        };
                    }, { totalImageSentiment: 0,totalAbsImageSentiment : 0 });

                console.log('abc', totalImageSentiment, totalAbsImageSentiment);

                const captionSentiments = results.map(r => sentiment.analyze(r.caption, options));
                console.dir('cap', captionSentiments);
                const totalCaptionSentiment = captionSentiments.reduce((acc, curr) => {
                    return acc + curr.score;
                }, 0);

                const totalAbsCaptionSentiment = captionSentiments.reduce((acc, curr) => {
                    return acc + Math.abs(curr.score);
                }, 0);

                return { imageSentimentScore: totalImageSentiment/totalAbsImageSentiment, captionSentimentScore: totalCaptionSentiment/totalAbsCaptionSentiment};
            }

            function getPaletteScore(palette) {
                console.log('pal', palette);
                return  palette[0] > palette[2] ? 1: -1 // R > B
            }

            async function getImagePalette(url, colorThief) {
                let isResolved = false;
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.addEventListener('load', function() {
                        const palette = colorThief.getPalette(img);
                        isResolved = true
                        resolve(palette);
                    });
                    setTimeout(() => {
                        if (!isResolved) {
                            console.log('rejected');
                            resolve(0);
                        }
                    }, 2000)
                    img.crossOrigin = 'Anonymous';
                    img.src = url;
                })
            }


            run();
        },
        [history],
    );

    return (
        <div className={style.process}>
            {/* {medias.length} */}
            <div style={{ width: '250px', textAlign: 'center', marginTop: '56px', flex: 1 }}>
                <h1 style={{ fontWeight: 'bold' }}>Computing Score…</h1>
                <p className={style.desc}>Analyzing all your data<br/>(photographs, Text, Captions and hashtags).</p>
                <img src={loading} alt="loading" />
            </div>
            <div className={style.tip}>
                <img src="https://axahk.cdn.axa-contento-118412.eu/axahk/2c8e56395bb750eaf79253df10e44d77e477e4a9_asian-woman-taking-photo_resize.jpg" className={style.imagePlaceholder} alt="travel" />
                <div className={style.text}>
                    <h2 className={style.title}>Set a time limit for work on a trip</h2>
                    <p className={style.desc}>The purpose of travelling is to do something different from our daily routine. For better de-stress results, remember to be fully committed to your trip and try not to bring your work along.</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessPage;
