import styles from '../styles/index.module.css';

import { notificationTypes } from '../model';

export const Notification = ({
    header = '',
    type,
    children,
}: {
    header?: string;
    type: notificationTypes;
    children: JSX.Element | string;
}) => {
    return (
        <div className={styles['notification']}>
            {header && <p className={styles['header']}>{header}</p>}
            <div className={styles['text']}>{children}</div>
        </div>
    );
};
