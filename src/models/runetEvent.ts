import {Participant} from "./participant";
import {Hall} from "./hall";
import {Widget} from "./widget";

export interface RunetEvent {
    // Поле видимое в программе, в других местах нет необходимости его использовать
    event_id: number;
    id: number;
    title: string;
    id_name: string;
    order_prefix: string;
    info: string;
    full_info: string;
    end_time: string;
    site_url: string;
    start_time: string;
    places: Array<Hall>|null;
    logo_source: string;
    video_source: string
    default_role_id: number;
    visible: boolean;
    visible_on_main: boolean;
    register_visible_user: boolean;
    participants: Participant[];
    paid: boolean;
    external: boolean;
    widgets: Array<Widget>;
    video_mime: string
    approved: number
    full_info_embedded_url: string,
}

export const EventTypes = [
    { id: 1, name: "Конференция" },
    { id: 6, name: "Конкурс премия" },
    { id: 7, name: "Другие мероприятия" },
    { id: 5, name: "Партнерская конференция" },
    { id: 4, name: "Круглый стол" },
    { id: 3, name: "Вебинар" },
    { id: 2, name: "Семинар тренинг" },
    { id: 8, name: "Корпоративное мероприятие" },
    { id: 9, name: "Закрытое мероприятие" },
    { id: 10, name: "Презентация" },
    { id: 11, name: "Клиентское мероприятие" },
    { id: 12, name: "Выставка" },
]