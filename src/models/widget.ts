export interface Widget {
    id: number;
    event_id: number;
    position: number;
    content: string;
}

export function getWidgetByPosition(widgets: Widget[]|null, position: number): Widget| null {

    if (widgets === null) {
        return null
    }

    const widget = widgets.find((obj) => {
        return obj.position === position;
    })

    return widget === undefined ? null : widget;
}