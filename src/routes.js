import React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';

const Routes = () => {
    return (
        <Switch>
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
        </Switch>
    );
};

export default Routes;
