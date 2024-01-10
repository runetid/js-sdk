import { AuthProvider } from "react-admin";
import HttpHeaders from "./httpHeaders";

interface Login { 
    username: string, 
    password: string
}

export const authProviderCallback = (BASE_URL: string, API_KEY: string, SECRET_KEY: string) => {
    const authHeaders = HttpHeaders.getInstance().getHeaders(API_KEY, SECRET_KEY);

    const headers = {
        'Content-Type': 'application/json',
        'ApiKey': API_KEY,
        'Hash': authHeaders.Hash,
        'Time': authHeaders.Time
    }

    function authUserByToken(auth: any) {
        const userGetRequest = new Request(BASE_URL + '/user/byToken/' + auth.token, {
            method: 'GET',
            headers: new Headers(headers),
        });
    
        return fetch(userGetRequest)
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                }
            })
            .then(user => {
                localStorage.setItem('token', auth.token);
                localStorage.setItem('user', JSON.stringify(user));
                return;
            })
    }

    const authProvider: AuthProvider = {
        login: ({username, password}: Login) => {            
            const request = new Request(BASE_URL + '/user/login', {
                method: 'POST',
                body: JSON.stringify({login: username, password}),
                headers: new Headers(headers),
            });
            return fetch(request)
                .then(response => {
                    if (response.status < 200 || response.status >= 300) {
                        return Promise.reject(response.statusText)
                    }
                    return response.json();
                })
                .then(auth => {
                    return authUserByToken(auth);
                })
                .catch(() => {
                    return Promise.reject("Invalid username or password");
                });
        },
        logout: () => {
            localStorage.removeItem("user");
            const token = localStorage.getItem('token');
            localStorage.removeItem("token");

            const logoutRequest = new Request(BASE_URL + '/user/logout/', {
                method: 'POST',
                headers: new Headers({...headers, Authorization: `Bearer ${token}`}),
            });

            fetch(logoutRequest)

            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
        getPermissions: () => {
            return Promise.resolve(undefined);
        },
        getIdentity: () => {
            const persistedUser = localStorage.getItem("user");
            const user = persistedUser ? JSON.parse(persistedUser) : null;

            return Promise.resolve(user);
        },
    }

    return {
        authProvider,
        authUserByToken
    }
}