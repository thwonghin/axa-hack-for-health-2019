import React from 'react';
import { Navbar } from 'react-bootstrap';

import style from './index.module.scss';

import logo from '../../assets/images/axa-logo.png';
import logo2x from '../../assets/images/axa-logo@2x.png';
import logo3x from '../../assets/images/axa-logo@3x.png';
import navbarButton from '../../assets/images/navbar-button.svg';
import { usePushHistory } from '../../libs/hooks';

export default function MainNavbar() {
    const onClickLogo = usePushHistory('/');

    return (
        <Navbar className={style.navbar} bg="light" expand="lg" fixed="top">
            <Navbar.Brand className={style.navbarBrand} onClick={onClickLogo}>
                <img
                    src={logo}
                    srcset={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`}
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