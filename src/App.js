import React from 'react';
import { Button } from 'react-bootstrap';

import logo from './logo.svg';
import style from './App.module.scss';

import Home from './pages/Home';

function App() {
  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <img src={logo} className={style.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>
          Hihi
        </Button>
        <a
          className={style.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home />
    </div>
  );
}

export default App;
