export interface ApiAccount {
    id: number;
    event_id: number;
    key: string;
    secret: string;
    role: string;
    blocked: boolean;
    blocked_reason: string;
    comment: string;
    domains: ApiAccountDomain[] | null;
}
export interface ApiAccountDomain {
    id: number;
    account_id: number;
    domain: string;
    comment: string;
}
