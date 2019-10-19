import React, { useEffect } from 'react';
// import { NlpManager } from 'node-nlp';
import Sentiment from 'sentiment';
import ColorThief from 'colorthief'
import { Nav } from 'react-bootstrap';


import { usePushHistory } from 'libs/hooks';
import logo from 'logo.svg';
import style from './index.module.scss';

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

const MlTest = () => {
    const onClickBook = usePushHistory('/process');

    useEffect(() => {
        // Train and save the model.
        (async() => {
            const colorThief = new ColorThief();
            const sentiment = new Sentiment();
            const result = sentiment.analyze('Cats are stupid.');
            console.dir(result);    // Score: -2, Comparative: -0.666
            const img = new Image();

            img.addEventListener('load', function() {
                const palette = colorThief.getPalette(img);
                palette.map(p => {
                    console.log(rgbToHex(...p))
                })
            });

            img.crossOrigin = 'Anonymous';
            img.src = 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/07/alex-crockford-home-abs-workout.jpg?itok=f3llAGeq&timestamp=1532953952'

        })();
    }, []) 

    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <img id="img" alt='hi' crossOrigin="anonymous" src="https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/07/alex-crockford-home-abs-workout.jpg?itok=f3llAGeq&timestamp=1532953952" width='150' height='150'/>
                <img src={logo} className={style.appLogo} alt="logo" />
                <Nav.Link onClick={onClickBook}>

                </Nav.Link>
            </header>
        </div>
    );
};

export default MlTest;
