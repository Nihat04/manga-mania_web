import styles from './styles/Filters.module.css';

import SidePanel from '../SidePanel/SidePanel';

import filterIcon from './assets/svg/filter.svg';
import { useState } from 'react';

const Filters = (props: { title: string }) => {
    const { title } = props;
    const [sideOpen, setSideOpen] = useState(false);

    return (
        <div className={styles['filters']}>
            <h2 className={styles['header']}>{title}</h2>
            <div className={styles['filters-wrapper']}>
                <button
                    className={styles['filters__menu__btn']}
                    onClick={() => setSideOpen(true)}
                >
                    <img src={filterIcon} />
                </button>
                <div className={styles['filters__dropdown']}>
                    <button className={styles['filters__dropdown__btn']}>
                        по умолчанию
                    </button>
                </div>
            </div>
            <SidePanel open={sideOpen} setOpen={setSideOpen} />
        </div>
    );
};

export default Filters;
