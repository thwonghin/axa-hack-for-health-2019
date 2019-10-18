import React from 'react';
import { Navbar } from 'react-bootstrap';

import style from './index.module.scss';

import logo from '../../assets/images/axa-logo.png';
import navbarButton from '../../assets/images/navbar-button.svg';

export default function MainNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    width="87"
                    height="46"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle className={style.navbarButton} aria-controls="basic-navbar-nav">
                <img
                    src={navbarButton}
                    alt="Button"
                />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Navbar>
    );
}