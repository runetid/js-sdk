export interface Seo {
    id: number;
    event_id: number;
    keywords: string;
    description: string;
    og_description: string;
    og_image: string;
    og_site_name: string;
    og_title: string;
    og_type: string;
    og_url: string;
}
export declare class BlankSeo implements Seo {
    id: number;
    event_id: number;
    keywords: string;
    description: string;
    og_description: string;
    og_image: string;
    og_site_name: string;
    og_title: string;
    og_type: string;
    og_url: string;
}
