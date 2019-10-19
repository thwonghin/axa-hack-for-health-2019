import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import style from './index.module.scss';

import arrowLeft from '../../assets/images/arrow-left.svg';
import times from '../../assets/images/times.svg';

export default function MainNavbar() {
    const history = useHistory();

    return (
        <Navbar className={style.navbar} bg="light" expand="lg" fixed="top">
            <Button className={`${style.actionButtons}`} variant="link" onClick={history.goBack}>
                <img src={arrowLeft} width={21} height={29} alt="Back" />
            </Button>
            <Button className={`${style.actionButtons} ml-auto`} variant="link">
                <img src={times} width={21} height={29} alt="Close" />
            </Button>
        </Navbar>
    );
}