import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

/**
 *
 * @param {string} path
 */
export function usePushHistory(path) {
    const history = useHistory();
    return useCallback(
        () => history.push(path),
        [path, history],
    );
}
