import { Participant } from "./participant";
import { Hall } from "./hall";
export interface RunetEvent {
    event_id: number;
    id: number;
    title: string;
    id_name: string;
    info: string;
    full_info: string;
    end_time: string;
    site_url: string;
    start_time: string;
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
}
export declare const EventTypes: {
    id: number;
    name: string;
}[];
