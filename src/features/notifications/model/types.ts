export enum notificationTypes {
    message,
    warning,
    error,
    success,
}

export type notification = {
    id: string;
    type: notificationTypes;
    header?: string;
    body: string;
};
