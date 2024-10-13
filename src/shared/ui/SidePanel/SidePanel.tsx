import styles from './styles/SidePanel.module.css';

import { ReactElement, useEffect } from 'react';

import classNames from 'classnames';

const SidePanel = ({
    btnRef,
    title,
    children,
    panelState,
}: {
    btnRef: React.RefObject<HTMLButtonElement>;
    title: string;
    children: ReactElement;
    panelState: {
        state: boolean;
        setState: React.Dispatch<React.SetStateAction<boolean>>;
    };
}) => {
    const changeOpen = (state: boolean) => {
        panelState.setState(state);

        if (state) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        if (btnRef.current != null) {
            btnRef.current.addEventListener('click', () => {
                changeOpen(!panelState.state);
            });
        }

        if (panelState.state) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btnRef, panelState.state]);

    return (
        <>
            <div
                className={classNames(styles['side-panel'], {
                    [styles['side-panel--open']]: panelState.state,
                })}
            >
                <div
                    className={classNames(styles['panel'], {
                        [styles['panel--open']]: panelState.state,
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
