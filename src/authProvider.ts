import { AuthProvider } from "react-admin";

interface Login { 
    username: string, 
    password: string
}

export function authUserByToken(auth: any, BASE_URL?: string, HttpHeaders?: any) {
    const authHeaders = HttpHeaders.getInstance().getHeaders()

    const userGetRequest = new Request(BASE_URL + '/user/byToken/' + auth.token, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'ApiKey': authHeaders.ApiKey,
            'Hash': authHeaders.Hash,
            'Time': authHeaders.Time
        }),
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

export const authProviderCallback = (BASE_URL: string, HttpHeaders: any) => {
    const authProvider: AuthProvider = {
        login: ({username, password}: Login) => {

            const authHeaders = HttpHeaders.getInstance().getHeaders()

            const request = new Request(BASE_URL + '/user/login', {
                method: 'POST',
                body: JSON.stringify({login: username, password: password}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'ApiKey': authHeaders.ApiKey,
                    'Hash': authHeaders.Hash,
                    'Time': authHeaders.Time
                }),
            });
            return fetch(request)
                .then(response => {
                    console.log(response.json());
                    if (response.status < 200 || response.status >= 300) {
                        return Promise.reject(response.statusText)
                    }
                    return response.json();
                })
                .then(auth => {
                    return authUserByToken(auth, BASE_URL, HttpHeaders);
                })
                .catch(() => {
                    return Promise.reject("Invalid username or password");
                });
        },
        logout: () => {
            localStorage.removeItem("user");
            const token = localStorage.getItem('token');
            localStorage.removeItem("token");

            const authHeaders = HttpHeaders.getInstance().getHeaders()

            const logoutRequest = new Request(BASE_URL + '/user/logout/', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'ApiKey': authHeaders.ApiKey,
                    'Hash': authHeaders.Hash,
                    'Time': authHeaders.Time
                }),
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

    return authProvider;
}