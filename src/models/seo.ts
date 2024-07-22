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

export class BlankSeo implements Seo {
    id = 0;
    event_id = 0;
    keywords = '';
    description = '';
    og_description = '';
    og_image = '';
    og_site_name = '';
    og_title = '';
    og_type = '';
    og_url = '';
}