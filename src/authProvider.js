import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_GET_PERMISSIONS, AUTH_CHECK } from 'react-admin';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('rest/rpc/login?select=me', {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.message);
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('me', JSON.stringify(data.me));
            });
    }
    if (type === AUTH_LOGOUT) {
        const request = new Request('rest/rpc/logout', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.message);
                }
                return response.json();
            })
            .then((data) => {
                localStorage.removeItem('me');
            });
    }
    if (type === AUTH_ERROR) {
        // ...
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('me') ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = JSON.parse(localStorage.getItem('me')).role;
        return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject('Unknown method');
};