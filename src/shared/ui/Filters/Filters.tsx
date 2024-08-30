import styles from './styles/Filters.module.css';

import SidePanel from '../SidePanel/SidePanel';

import filterIcon from './assets/svg/filter.svg';

const Filters = (props: { title: string }) => {
    const { title } = props;

    return (
        <div className={styles['filters']}>
            <h2 className={styles['header']}>{title}</h2>
            <div className={styles['filters-wrapper']}>
                <button className={styles['filters__menu__btn']}>
                    <img src={filterIcon} />
                </button>
                <div className={styles['filters__dropdown']}>
                    <button className={styles['filters__dropdown__btn']}>
                        по умолчанию
                    </button>
                </div>
            </div>
            <SidePanel />
        </div>
    );
};

export default Filters;
