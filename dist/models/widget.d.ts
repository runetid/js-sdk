export interface Widget {
    id: number;
    event_id: number;
    position: number;
    content: string;
}
export declare function getWidgetByPosition(widgets: Widget[] | null, position: number): Widget | null;
