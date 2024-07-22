import { Participant } from "./participant";
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
    places: Array<EventPlace> | null;
    logo_source: string;
    default_role_id: number;
    visible: boolean;
    visible_on_main: boolean;
    register_visible_user: boolean;
    participants: Participant[];
    paid: boolean;
    external: boolean;
}
export interface EventPlace {
    id: number | null | string;
    place: string;
}
