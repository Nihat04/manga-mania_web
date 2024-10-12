export type orderItem = {
    label: string;
    propertyName: string;
};

export enum filterTypes {
    options,
    range,
}

export type range = { min: number; max: number };

export type filter = {
    label: string;
    propertyName: string;
    type: filterTypes;
    options?: string[];
    range?: range;
};

export type filterHandler = {
    current: {
        order: orderItem;
        filters: filter[];
    };
    filters: filter[];
    orderings: orderItem[];
};
