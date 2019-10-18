import React, { useMemo } from 'react';
import { Button } from 'react-bootstrap';

/**
 * IgConnectButton
 * @param {{ redirectUri: string }} props
 */
export default function IgConnectButton(props) {
    const connectUrl = useMemo(
        () => {
            return 'https://api.instagram.com/oauth/authorize'
            + '?app_id=959521137715086'
            + `&redirect_uri=${props.redirectUri}`
            + '&scope=user_profile'
            + '&response_type=code';
        },
        [props.redirectUri],
    );

    return (
        <Button
            href={connectUrl}
            variant="outline-info"
        >
            Connect to Instagram
        </Button>
    )
}