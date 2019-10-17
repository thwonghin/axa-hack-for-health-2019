import React from 'react';
import {
    Route,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import style from './routes.module.scss';
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';

const Routes = () => {
    return (
        <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={style.switchWrapper}
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
