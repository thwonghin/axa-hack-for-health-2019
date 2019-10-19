import React from 'react';

import arrowRoundRight from '../../assets/images/arrow-round-right.svg';
import style from './index.module.scss';

import IgConnectButton from '../../components/IgConnectButton';

const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.content}>
                <h1 className={style.heading}>Persononized your Health Assessment with just one click.</h1>
                <p className={style.description}>Lôrem ipsum dolor sït àmet, vivëndùm àdversarium Lôrem ipsum dolor sït àmet, vivëndùm àdversarium Lôrem ipsum dolor sït àmet.</p>
                <div
                    className={style.cta}
                >
                    <IgConnectButton />
                </div>
            </div>
            <div className={style.moreArrow}>
                <img
                    src={arrowRoundRight}
                    alt="Down"
                />
            </div>
        </div>
    );
};

export default Home;
