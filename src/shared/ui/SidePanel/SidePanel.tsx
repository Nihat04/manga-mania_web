import styles from './styles/SidePanel.module.css';

import RangeItem from './ui/PanelItems/RangeItem';
import OptionsItem from './ui/PanelItems/OptionsItem';
import { useState } from 'react';
import classNames from 'classnames';

export enum OptionType {
    range,
    options,
    link,
}

const SidePanel = (props: { open: boolean; setOpen }) => {
    const { open, setOpen } = props;

    return (
        <div
            className={classNames(styles['side-panel'], {
                [styles['side-panel--open']]: open,
            })}
        >
            <div className={styles['panel']}>
                <div className={styles['header']}>
                    <p>Фильтры</p>
                </div>
                <ul className={styles['list']}>
                    <RangeItem name="цена" range={{ start: 50, end: 2000 }} />
                    <OptionsItem
                        name="возраст"
                        options={['18+', '16+', '12+']}
                    />
                </ul>
            </div>
            <div
                className={styles['close-area']}
                onClick={() => setOpen(false)}
            ></div>
        </div>
    );
};

export default SidePanel;
