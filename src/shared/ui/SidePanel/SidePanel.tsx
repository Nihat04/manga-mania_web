import styles from './styles/SidePanel.module.css';
import './styles/body.css';

import { ReactElement, useEffect, useState } from 'react';

import classNames from 'classnames';

const SidePanel = ({
    btnRef,
    title,
    children,
}: {
    btnRef: React.RefObject<HTMLButtonElement>;
    title: string;
    children: ReactElement;
}) => {
    const [open, setOpen] = useState(false);

    const changeOpen = (state: boolean) => {
        setOpen(state);

        if (state) {
            document.body.classList.add('body--blocked');
        } else {
            document.body.classList.remove('body--blocked');
        }
    };

    useEffect(() => {
        if (btnRef.current != null) {
            btnRef.current.addEventListener('click', () => {
                changeOpen(!open);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btnRef]);

    return (
        <>
            <div
                className={classNames(styles['side-panel'], {
                    [styles['side-panel--open']]: open,
                })}
            >
                <div
                    className={classNames(styles['panel'], {
                        [styles['panel--open']]: open,
                    })}
                >
                    <div className={styles['header']}>
                        <p>{title}</p>
                    </div>
                    <div className={styles['body']}>{children}</div>
                </div>
                <div
                    className={styles['close-area']}
                    onClick={() => changeOpen(false)}
                ></div>
            </div>
        </>
    );
};

export default SidePanel;
