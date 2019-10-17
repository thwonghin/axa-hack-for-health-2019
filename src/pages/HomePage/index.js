import React from 'react';
import { Nav } from 'react-bootstrap';

import { usePushHistory } from 'libs/hooks';
import logo from 'logo.svg';
import style from './index.module.scss';

const Home = () => {
    const onClickBook = usePushHistory('/process');

    return (
        <div className={style.app}>
            <header className={style.appHeader}>
                <img src={logo} className={style.appLogo} alt="logo" />
                <Nav.Link onClick={onClickBook}>
                    Go book
                </Nav.Link>
            </header>
        </div>
    );
};

export default Home;
