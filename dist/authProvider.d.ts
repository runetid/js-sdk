interface Login {
    username: string;
    password: string;
}
export declare function authUserByToken(auth: any, BASE_URL?: string, HttpHeaders?: any): Promise<void>;
export declare const authProviderCallback: (BASE_URL: string, HttpHeaders: any) => {
    login: ({ username, password }: Login) => Promise<void>;
    logout: () => Promise<void>;
    checkError: () => Promise<void>;
    checkAuth: () => Promise<void>;
    getPermissions: () => Promise<any>;
    getIdentity: () => Promise<any>;
};
export {};
