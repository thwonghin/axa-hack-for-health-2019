import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import MainNavbar from './components/MainNavbar';
import Routes from './routes';

const App = () => (
    <MemoryRouter initialEntries={['/']}>
        <MainNavbar />
        <Routes />
    </MemoryRouter>
);

export default App;
