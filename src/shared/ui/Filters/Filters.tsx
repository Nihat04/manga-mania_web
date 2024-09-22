import styles from './styles/Filters.module.css';

import { useRef } from 'react';
import FilterType from '../SidePanel/model/FilterType';

import FilteringSidePanel from '../SidePanel/FilteringSidePanel';

import filterIcon from './assets/svg/filter.svg';

type dropdownItem = {
    label: string;
    propertyName: string;
    reverse: boolean;
};

const DROPDOWN_FILTERS: dropdownItem[] = [
    { label: 'Популярное', propertyName: 'price', reverse: false },
    { label: 'Кол-во отзывов', propertyName: 'price', reverse: false },
    { label: 'Возрастание цены', propertyName: 'price', reverse: false },
    { label: 'Убыванию цены', propertyName: 'price', reverse: true },
];

const FILTER_MENU = [
    {
        label: 'цена',
        propertyName: 'price',
        type: FilterType.range,
        range: { min: 50, max: 2000 },
    },
    {
        label: 'возраст',
        propertyName: 'price',
        type: FilterType.range,
        options: ['18+', '16+', '12+'],
    },
];

const Filters = ({ title }: { title: string }) => {
    const menuBtnRef = useRef<HTMLButtonElement>(null);

    return (
        <div className={styles['filters']}>
            <h2 className={styles['header']}>{title}</h2>
            <div className={styles['filters-wrapper']}>
                <button className={styles['menu--btn']} ref={menuBtnRef}>
                    <img src={filterIcon} />
                </button>
                <div className={styles['dropdown']}>
                    <select className={styles['dropdown--btn']} name="" id="">
                        {DROPDOWN_FILTERS.map((el, index) => (
                            <option key={index}>{el.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <FilteringSidePanel
                btnRef={menuBtnRef}
                title="Фильтры"
                filters={FILTER_MENU}
            />
        </div>
    );
};

export default Filters;
