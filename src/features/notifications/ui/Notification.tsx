import styles from '../styles/index.module.css';

import classNames from 'classnames';

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
    const specifyType = (): string => {
        return 'notification--' + type;
    };

    return (
        <div className={classNames(styles['notification'], specifyType())}>
            {header && <p className={styles['header']}>{header}</p>}
            <div className={styles['text']}>{children}</div>
        </div>
    );
};
