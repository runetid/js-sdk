import { User } from "./user";
import { RunetEvent } from "./runetEvent";
export interface Participant {
    id: number;
    event_id: number;
    role_id: number;
    user_id: number;
    attributes: object;
    user: User;
    role: Role;
    created_at: string;
    event: RunetEvent;
}
export interface Role {
    id: number;
    code: string;
    title: string;
    event_id: number;
    color: string;
    priority: number;
    template_uuid: string;
    is_notify: boolean;
}
