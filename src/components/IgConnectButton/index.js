import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';

import style from './index.module.scss';

/**
 * IgConnectButton
 * @param {{ redirectUri: string }} props
 */
export default function IgConnectButton() {
    const connectUrl = useMemo(
        () => {
            return 'https://api.instagram.com/oauth/authorize'
            + `?app_id=${process.env.REACT_APP_IG_APP_ID}`
            + `&redirect_uri=${window.location.origin}/ig-redirect`
            + '&scope=user_profile,user_media'
            + '&response_type=code';
        },
        [],
    );

    return (
        <Button
            href={connectUrl}
            variant="outline-info"
            className={style.igConnectButton}
        >
            Connect to Instagram
        </Button>
    )
}