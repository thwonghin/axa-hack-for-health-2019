import React from 'react';

import logo from 'logo.svg';
import style from './index.module.scss';

import IgConnectButton from '../../components/IgConnectButton';

const Home = () => {
    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <img src={logo} className={style.appLogo} alt="logo" />
                <IgConnectButton/>
            </header>
        </div>
    );
};

export default Home;
