import { User } from "./user";
import { Product } from "./product";
export interface PayOrder {
    id: number;
    payer_id: number;
    event_id: number;
    paid: boolean;
    total: number;
    juridical: boolean;
    paid_time: string;
    number: string;
    created_at: string;
    event: Event;
    payer: User;
    order_juridical: PayOrderJuridical | null;
    items: OrderItem[] | null;
}
export interface PayOrderJuridical {
    id: number;
    order_id: number;
    delivery_type: number;
    name: string;
    address: string;
    post_address: string;
    inn: string;
    kpp: string;
    phone: string;
    fax: string;
    bank_name: string;
    checking_account: string;
    cor_account: string;
    bik: string;
    contact_email: string;
    contact_person: string;
    hash: string;
}
export interface OrderItem {
    id: number;
    owner_id: number;
    owner: User;
    payer_id: number;
    cost: number;
    paid: boolean;
    product_id: number;
    product: Product;
    attributes: any;
    description: string;
    paid_time: Date | string | null;
    refund: boolean;
    refund_time: Date | string | null;
    order_id: number;
}
