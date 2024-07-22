export interface Partner {
    id: number;
    title: string;
    logo_url: string;
    url: string;
    type: number;
    signature: string;
    event_id: number;
}

export interface PartnerTypes {
    id: number,
    title: string,
    sort: number
}