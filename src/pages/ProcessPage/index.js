import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import { isSameDay, differenceInMonths } from 'date-fns';

import loading from 'assets/loading.svg';
import { usePushHistory } from 'libs/hooks';
import { store } from '../../store';
import style from './index.module.scss';

const ProcessPage = () => {
    const onClickCancel = usePushHistory('/');
    const [medias, setMedias] = useState([]);

    useEffect(
        () => {
            async function assignMediasFromApiData(apiData, results, initMediaDate, lastMediaDate = null) {
                const rawMedias = apiData.data;

                rawMedias.forEach((rawMedia) => {
                    const currentMediaDate = new Date(rawMedia.timestamp);
                    if (lastMediaDate !== null && isSameDay(currentMediaDate, lastMediaDate)) {
                        return;
                    }
                    lastMediaDate = currentMediaDate;

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
                await assignMediasFromApiData(lastMediaDate, data, results);
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

                    await assignMediasFromApiData(data, results, new Date(data.data[0].timestamp));
                    setMedias(results);
                    console.log(results);
                } catch (err) {
                    console.error(err);
                    onClickCancel();
                }
            }

            run();
        },
        [onClickCancel],
    );

    return (
        <div className={style.process}>
            {/* {medias.length} */}
            <div style={{ width: '250px', textAlign: 'center', marginTop: '56px', flex: 1 }}>
                <h1>Analyzing data…</h1>
                <p className={style.desc}>Gathering Body check plans tailored exclusively for you!</p>
                <img src={loading} alt="loading" />
            </div>
            <div className={style.tip}>
                <div className={style.imagePlaceholder}></div>
                <div className={style.text}>
                    <h2 className={style.title}>Health Tip #1039</h2>
                    <p className={style.desc}>Lôrem ipsum dolor sït àmet, vivëndùm àdversarium Lôrem ipsum dolor sït àmet, vivëndùm àdversarium</p>
                </div>
            </div>
        </div>
    );
};

export default ProcessPage;
