declare class HttpHeaders {
    Hash: string;
    Time: string;
    private static instance;
    private constructor();
    static getInstance(): HttpHeaders;
    getHeaders(ApiKey: string, secret: string): HttpHeaders;
}
export default HttpHeaders;
