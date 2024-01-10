import {GetListParams, fetchUtils} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

enum HttpMethod {
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    OPTIONS = 'OPTIONS',
    POST = 'POST',
}

function encode(params: any, prefix: string | null = null) {
    let items: any = [];

    for (let field in params) {

        let key = prefix ? prefix + "[" + field + "]" : field;
        let type = typeof params[field];

        if (key !== 'meta') {
            switch (type) {
                case "object":
                    items = items.concat(encode(params[field], key));
                    break;
                case "function":
                    break;
                default:
                    items.push(key + "=" + encodeURI(params[field]));
                    break;
            }
        }
    }

    return items.join("&");
}

export const dataProviderCallback = (BASE_URL: string, HttpHeaders: any) => {
    let httpClient = (url: string, options: fetchUtils.Options = {mode: "no-cors"}) => {
        const token = localStorage.getItem('token');
        if (!options.headers) {
    
            const authHeaders = HttpHeaders.getInstance().getHeaders()
            options.headers = new Headers({
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'ApiKey' : authHeaders.ApiKey,
                'Hash': authHeaders.Hash,
                'Time': authHeaders.Time
            });
        }
    
        return fetchUtils.fetchJson(url, options);
    };

    const srp = jsonServerProvider(BASE_URL, httpClient);

    const dataProvider = {
        ...srp,
        fetch: (resource: string, method: HttpMethod, payload: object|null) => {
            let options: fetchUtils.Options = {method: method}
    
            if (payload) {
                options.body = JSON.stringify(payload)
            }
    
            return httpClient(`${BASE_URL}/${resource}`, options)
        },
        getList: (resource: string, params: GetListParams) => {

            const filter = encode(params);
    
            let limit = params.pagination.perPage;
            let offset = 0;
    
            if (params.pagination.page && params.pagination.perPage) {
                limit = params.pagination.perPage;
                offset = (params.pagination.page * params.pagination.perPage) - params.pagination.perPage
            }
    
            const delimiter = resource.includes('?') ? '&' : '?';
    
            return httpClient(
                `${BASE_URL}/${resource}/list${delimiter}limit=${limit}&offset=${offset}&${filter}`,
                {
                    method: 'GET',
                })
                .then(({json}) => {
                    return (json)
                });
        },
        getManyReference: (resource: string, params: any) => {

            const filter = encode(params);
    
            let limit = params.pagination.perPage;
            let offset = 0;
    
            if (params.pagination.page && params.pagination.perPage) {
                limit = params.pagination.perPage;
                offset = (params.pagination.page * params.pagination.perPage) - params.pagination.perPage
            }
    
            const delimiter = resource.includes('?') ? '&' : '?';
    
            return httpClient(
                `${BASE_URL}/${resource}/list${delimiter}limit=${limit}&offset=${offset}&${filter}`,
                {
                    method: 'GET',
                })
                .then(({json}) => {
                    return (json)
                });
        },
        getOne: (resource: string, params: any) => {
            return httpClient(
                `${BASE_URL}/${resource}/${params.id}`,
                {
                    method: 'GET',
                })
                .then(({json}) => (json));
        },
        create: (resource: string, params: any) => {

            return httpClient(
                `${BASE_URL}/${resource}`,
                {
                    method: 'POST',
                    body: JSON.stringify(params.data),
                })
                .then(({json}) => {
                    return {data: json};
                });
        }
    }

    return dataProvider;
}