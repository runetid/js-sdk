import {User} from "./user";
import {Product} from "./product";

export interface PayOrder {
    /** Идентификатор */
    id: number;
    /** Идентификатор плательщика */
    payer_id: number;
    /** Идентификатор мероприятия */
    event_id: number;
    /** Оплачено */
    paid: boolean;
    /** Сумма заказа */
    total: number;
    /** Юридическое лицо */
    juridical: boolean;
    /** Дата оплаты */
    paid_time: string;
    /** Номер заказа */
    number: string;
    /** Дата создания заказа */
    created_at: string;
    /** Сумма, оплаченная через платежную систему */
    total_paid: number;

    /** Информация о мероприятии */
    event: Event;
    /** Плательщик */
    payer: User;
    /** Данные о юридическом лице */
    order_juridical: PayOrderJuridical|null;
    /** Список позиций в заказе */
    items: OrderItem[]|null;
}

export interface PayOrderJuridical {
    /** Идентификатор юридического лица */
    id: number;
    /** Идентификатор заказа */
    order_id: number;
    /** Тип доставки */
    delivery_type: number;
    /** Название юридического лица */
    name: string;
    /** Адрес юридического лица */
    address: string;
    /** Почтовый адрес юридического лица */
    post_address: string;
    /** ИНН юридического лица */
    inn: string;
    /** КПП юридического лица */
    kpp: string;
    /** Телефон юридического лица */
    phone: string;
    /** Факс юридического лица */
    fax: string;
    /** Название банка юридического лица */
    bank_name: string;
    /** Расчётный счёт юридического лица */
    checking_account: string;
    /** Кор. счёт юридического лица */
    cor_account: string;
    /** БИК юридического лица */
    bik: string;
    /** Электронная почта юридического лица */
    contact_email: string;
    /** Контактное лицо юридического лица */
    contact_person: string;
    /** Хэш */
    hash: string;
}

export interface OrderItem {
    /** Идентификатор позиции */
    id: number,
    /** Идентификатор владельца */
    owner_id: number,
    /** Владелец */
    owner: User,
    /** Идентификатор плательщика */
    payer_id: number,
    /** Стоимость позиции */
    cost: number,
    /** Оплачено */
    paid: boolean,
    /** Идентификатор продукта */
    product_id: number,
    /** Продукт */
    product: Product,
    /** Атрибуты */
    attributes: any,
    /** Описание позиции */
    description: string,
    /** Дата оплаты */
    paid_time: Date | string | null,
    /** Отменено */
    refund: boolean,
    /** Дата отмены */
    refund_time: Date | string | null,
    /** Идентификатор заказа */
    order_id: number
}