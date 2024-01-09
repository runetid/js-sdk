declare class HttpHeaders {
    Hash: string;
    Time: string;
    ApiKey: string;
    private secret;
    private static instance;
    private constructor();
    static getInstance(): HttpHeaders;
    getHeaders(): HttpHeaders;
}
export default HttpHeaders;
