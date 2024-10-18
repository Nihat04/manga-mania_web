import { Dispatch } from 'redux';
import {
    addNotification,
    removeNotification,
} from '../../store/screen/screenSlice';
import { notification, notificationTypes } from './types';

export function createNotification({
    header = '',
    bodyText,
}: {
    header?: string;
    bodyText: string;
}) {
    const notification: notification = {
        id: Math.random().toString(16).slice(2),
        type: notificationTypes.message,
        header: header,
        body: bodyText,
    };

    return (dispatch: Dispatch) => {
        dispatch(addNotification(notification));
        setTimeout(() => {
            dispatch(removeNotification(notification.id));
        }, 2000);
    };
}
