export interface MailTemplate {
    "id": number;
    "columns": string[];
    "event": string | null;
    "event_id": number | null;
    "from": string;
    "subject": string;
    "text": string;
    "title": string;
    "type": MailTemplateType;
    "uuid": string;
}
declare enum MailTemplateType {
    TYPE_LETTER = "letter",
    TYPE_SYSTEM = "system"
}
export {};
