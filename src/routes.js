import React from 'react';
import {
    Route,
} from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import style from './routes.module.scss';
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';
import IgRedirectPage from './pages/IgRedirectPage';

function mapStyles(styles) {
    return {
        position: styles.transitionIndex <= 1 ? 'relative' : 'absolute',
        transform: `translateX(${styles.offset}%)`,
        height: 'calc(100vh - 68px)',
    };
}

function slide(val) {
    return spring(val, {
        stiffness: 200,
        damping: 24,
    });
}

const Routes = () => {
    return (
        <AnimatedSwitch
            atEnter={{ offset: 100, transitionIndex: 0, }}
            atLeave={{ offset: slide(-100), transitionIndex: 1, }}
            atActive={{ offset: slide(0), transitionIndex: 2, }}
            className={style.switchWrapper}
            mapStyles={mapStyles}
        >
            <Route
                path="/process"
            >
                <ProcessPage />
            </Route>
            <Route
                path="/ig-redirect"
            >
                <IgRedirectPage />
            </Route>
            <Route
                path="/"
            >
                <HomePage />
            </Route>
        </AnimatedSwitch>
    );
};

export default Routes;
