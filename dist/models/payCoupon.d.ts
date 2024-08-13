/**
 * Промокод
 */
export interface PayCoupon {
    /**
     * Идентификатор
     * @format int64
     */
    readonly id: number;
    /**
     * Идентификатор мероприятия
     * @format int64
     */
    event_id: number;
    /**
     * Код
     */
    code: string;
    /**
     * размер скидки
     */
    discount: number;
    /**
     * Время начала действия
     */
    start_time: string;
    /**
     * Время окончания действия
     */
    end_time: string;
    /**
     * Множественная активация
     */
    multiple: boolean;
    /**
     * Количество возможных активаций
     */
    multiple_count: number;
    /**
     * Менеджер обработки (Фиксированная скидка или процент)
     */
    manager: 'Fix' | 'Percent';
    /**
     * Количество активаций
     */
    readonly activations_count: number;
}
/**
 * Форма создания промокода
 */
export interface PayCouponForm {
    /**
     * Идентификатор мероприятия
     * @format int64
     */
    event_id: number;
    /**
     * размер скидки
     */
    discount: number;
    /**
     * Множественная активация
     */
    multiple: boolean;
    /**
     * Количество возможных активаций
     */
    multiple_count: number;
    /**
     * Менеджер обработки (Фиксированная скидка или процент)
     */
    manager: 'Fix' | 'Percent';
    /**
     * Код. Если указан код, будет создан один промокод, с количством активаций multiple_count
     * Если код не указан, будет создано несколько промокодов с уникальным кодом. Колическтво = multiple_count
     */
    code: string | null;
}
