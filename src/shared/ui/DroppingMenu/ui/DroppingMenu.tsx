import { useState } from 'react';
import styles from '../styles/index.module.css';

import classNames from 'classnames';

export const DroppingMenu = ({
    label,
    children,
}: {
    label: string;
    children: JSX.Element | string;
}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <p
                className={classNames(styles['label'], {
                    [styles['menu--open']]: open,
                })}
                onClick={() => setOpen(!open)}
            >
                {label}
            </p>
            <div
                className={classNames(styles['body'], {
                    [styles['body--visible']]: open,
                })}
            >
                {children}
            </div>
        </div>
    );
};
