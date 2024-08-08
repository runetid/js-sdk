export interface Price {
    id: number;
    cost: number;
    start_time?: string;
    end_time?: string;
}

export interface Product {
    id: number;
    cost: number;
    title: string;
    start_time: string;
    end_time: string;
    current_price: Price,
    price: Price[]
    event_id: number
    description: string;
    manager: string;
    attributes: string;
    count: number;
}
