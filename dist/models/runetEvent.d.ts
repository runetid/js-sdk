import { Participant } from "./participant";
import { Hall } from "./hall";
import { Widget } from "./widget";
export interface RunetEvent {
    event_id: number;
    id: number;
    title: string;
    id_name: string;
    order_prefix: string;
    info: string;
    full_info: string;
    start_time: string;
    start_time_text: string;
    end_time: string;
    end_time_text: string;
    site_url: string;
    places: Array<Hall> | null;
    logo_source: string;
    video_source: string;
    default_role_id: number;
    visible: boolean;
    visible_on_main: boolean;
    register_visible_user: boolean;
    participants: Participant[];
    paid: boolean;
    external: boolean;
    widgets: Array<Widget>;
    video_mime: string;
    approved: number;
    full_info_embedded_url: string;
}
export declare const EventTypes: {
    id: number;
    name: string;
}[];
