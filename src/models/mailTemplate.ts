export interface MailTemplate {
    "id": number;
    // массив переменных для подстановки
    // ["last_name", "first_name"]
    "columns": string[];
    // почтовое событие, например
    // ForgotPassword
    // Register
    "event": string|null;
    //Идентификатор мероприятия
    "event_id": number|null;
    // почта отправителя
    "from": string
    // Тема письма
    "subject": string;
    // текст письма
    "text": string;
    // Название письма для отображения в панели управления
    "title": string;
    "type": MailTemplateType;
    "uuid": string;
}

enum MailTemplateType {
    TYPE_LETTER = "letter",
    TYPE_SYSTEM = "system",
}