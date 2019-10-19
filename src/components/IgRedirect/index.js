import React, { useEffect } from 'react';

import qs from 'qs';
import axios from 'axios';

import { usePushHistory } from 'libs/hooks';
import { store } from '../../store';

export default function IgRedirect() {
    const pushHome = usePushHistory('/');
    const pushProcess = usePushHistory('/process');
    const { code } = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    useEffect(
        () => {
            if (!code) {
                return;
            }

            window.history.pushState({}, null, `${window.location.origin}${window.location.pathname}`);

            async function run() {
                try {
                    const form = new FormData();
                    form.append('app_id', process.env.REACT_APP_IG_APP_ID);
                    form.append('app_secret', process.env.REACT_APP_IG_APP_SECRET);
                    form.append('grant_type', 'authorization_code');
                    form.append('redirect_uri', `${window.location.origin}${window.location.pathname}`);
                    form.append('code', code);
                    const { data } = await axios.post(
                        'https://api.instagram.com/oauth/access_token',
                        form,
                    );
                    store.ig.accessToken = data.access_token;
                    store.ig.userId = data.user_id;
                    pushProcess();
                } catch (err) {
                    console.error(err);
                    pushHome();
                }
            }
            run();
        },
        [code, pushHome, pushProcess],
    );

    return <div/>;
}