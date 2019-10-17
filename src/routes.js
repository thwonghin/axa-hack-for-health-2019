import React from 'react';
import {
    Route,
} from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import style from './routes.module.scss';
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';

function mapStyles(styles) {
    return {
        transform: `translateX(${styles.offset}%)`,
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
            atEnter={{ offset: 100 }}
            atLeave={{ offset: slide(-100) }}
            atActive={{ offset: slide(0) }}
            className={style.switchWrapper}
            mapStyles={mapStyles}
        >
            <Route
                path="/process"
            >
                <ProcessPage />
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
