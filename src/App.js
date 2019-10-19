import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainNavbar from './components/MainNavbar';
import Routes from './routes';

const App = () => (
    <BrowserRouter>
        <MainNavbar />
        <Routes />
    </BrowserRouter>
);

export default App;
