import React from 'react';
import {
    Route,
    Redirect,
} from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import style from './routes.module.scss';
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';
import IgRedirectPage from './pages/IgRedirectPage';
import BookingDoctorPage from './pages/BookingDoctorPage';
import BookingConfirmedPage from './pages/BookingConfirmedPage';
import RewardPage from './pages/RewardPage';
import PhychoPage from './pages/PhychoPage';

function mapStyles(styles) {
    return {
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
            atEnter={{ offset: 100 }}
            atLeave={{ offset: slide(-100) }}
            atActive={{ offset: slide(0) }}
            className={style.switchWrapper}
            mapStyles={mapStyles}
        >
            <Route
                path="/booking-confirmed"
            >
                <BookingConfirmedPage />
            </Route>
            <Route
                path="/booking"
            >
                <BookingDoctorPage />
            </Route>
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
                path="/reward"
            >
                <RewardPage />
            </Route>
            <Route
                path="/phycho"
            >
                <PhychoPage />
            </Route>
            <Route
                path="/"
            >
                <HomePage/>
            </Route>
        </AnimatedSwitch>
    );
};

export default Routes;
