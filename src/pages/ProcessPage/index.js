import React from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

import { usePushHistory } from 'libs/hooks';

const ProcessPage = () => {
    const location = useLocation();
    const onClickCancel = usePushHistory('/');
    const { code } = qs.parse(location.search, { ignoreQueryPrefix: true });

    // https://api.instagram.com/oauth/access_token \ -F app_id={app-id} \ -F app_secret={app-secret} \ -F grant_type=authorization_code \ -F redirect_uri={redirect-uri} \ -F code={code}
    axios.post(
        'https://api.instagram.com/oauth/access_token',
        {
            app_id: '959521137715086'
        },
    )

    return (
        <div>
            <Nav.Link onClick={onClickCancel}>
                Cancel
            </Nav.Link>
        </div>
    );
};

export default ProcessPage;
