import { AuthProvider } from "react-admin";
export declare const authProviderCallback: (BASE_URL: string, API_KEY: string, SECRET_KEY: string) => {
    authProvider: AuthProvider;
    authUserByToken: (auth: any) => Promise<void>;
};
