import {Md5} from 'ts-md5';

class HttpHeaders {

    public Hash: string = '';
    public Time: string = '';
    public ApiKey = 'peij8Ash';
    private secret = 'Keimai3L';

    private static instance: HttpHeaders;

    private constructor() {
    }

    static getInstance() {
        if (!HttpHeaders.instance) {
            HttpHeaders.instance = new HttpHeaders();
        }

        return HttpHeaders.instance;
    }

    getHeaders(): HttpHeaders {
        HttpHeaders.instance.Time = Date.now().toString()
        HttpHeaders.instance.Hash = Md5.hashAsciiStr(HttpHeaders.instance.ApiKey + HttpHeaders.instance.Time + HttpHeaders.instance.secret);
        return this
    }
}


export default HttpHeaders;