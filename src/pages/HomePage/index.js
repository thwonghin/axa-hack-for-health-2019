import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

import qs from 'qs';
import homeBg from '../../assets/images/home-bg.svg';
import style from './index.module.scss';

import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import orangeArrow from '../../assets/images/orange-arrow.svg'

import IgConnectButton from '../../components/IgConnectButton';

import IgRedirect from '../../components/IgRedirect';
import { usePushHistory } from '../../libs/hooks';

const Home = () => {
    const toBooking = usePushHistory('/booking');

    useEffect(
        () => {
            const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
            if ('booking' in query) {
                window.history.pushState({}, null, `${window.location.origin}${window.location.pathname}`);
                toBooking();
            }
        },
        [toBooking],
    )

    return (
        <div className={style.home}>
            <IgRedirect />
            <div className={style.content}>
                <div className={style.bgColor} />
                <img
                    className={style.homeBg}
                    src={homeBg}
                    width={191}
                    height={275}
                    alt="Home BG"
                />
                <div className="position-relative">
                    <h1 className={style.heading}>Understand<br/>Your<br/>Mental Health<br/>with just<br/>one click.</h1>
                    <p className={style.description}>Your social profile will only be used for this analysis. We will not share your information without your consent.</p>
                    <div
                        className={style.cta}
                    >
                        <Button className={`${style.ctaButton} mr-3`} variant="light">
                            <img src={facebook} width={34} height={34} alt="Facebook"/>
                        </Button>
                        <IgConnectButton />
                        <Button className={`${style.ctaButton} ml-3`} variant="light">
                            <img src={twitter} width={34} height={34} alt="Twitter"/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={style.ctaDescription}>
                <img className={style.ctaDescriptionArrow} src={orangeArrow} width={35} height={50} alt="Orange arrow" />
                Select one of the following Social Media Platform to get your results!
            </div>
        </div>
    );
};

export default Home;
