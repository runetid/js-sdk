import { AuthProvider } from "react-admin";
export declare function authUserByToken(auth: any, BASE_URL?: string): Promise<void>;
export declare const authProviderCallback: (BASE_URL: string) => AuthProvider;
