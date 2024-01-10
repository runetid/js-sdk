import {Md5} from 'ts-md5';

class HttpHeaders {
    public Hash: string = '';
    public Time: string = '';

    private static instance: HttpHeaders;

    private constructor() {
    }

    static getInstance() {
        if (!HttpHeaders.instance) {
            HttpHeaders.instance = new HttpHeaders();
        }

        return HttpHeaders.instance;
    }

    getHeaders(ApiKey: string, secret: string): HttpHeaders {
        HttpHeaders.instance.Time = Date.now().toString()
        HttpHeaders.instance.Hash = Md5.hashAsciiStr(ApiKey + HttpHeaders.instance.Time + secret);
        return this
    }
}


export default HttpHeaders;