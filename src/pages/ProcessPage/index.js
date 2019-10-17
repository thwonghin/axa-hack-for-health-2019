import React from 'react';
import { Nav } from 'react-bootstrap';

import { usePushHistory } from 'libs/hooks';

const ProcessPage = () => {
    const onClickCancel = usePushHistory('/');

    return (
        <Nav.Link onClick={onClickCancel}>
            Cancel
        </Nav.Link>
    );
};

export default ProcessPage;
