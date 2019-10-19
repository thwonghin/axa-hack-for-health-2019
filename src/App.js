import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainNavbar from './components/MainNavbar';
import Routes from './routes';

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MainNavbar />
        <Routes />
    </BrowserRouter>
);

export default App;
