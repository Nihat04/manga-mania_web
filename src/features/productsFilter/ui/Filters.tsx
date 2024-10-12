import styles from '../styles/Filters.module.css';

import { useRef } from 'react';

import { filter, orderItem } from '../model';

import FilteringSidePanel from './FilteringSidePanel';

import filterIcon from '../assets/svg/filter.svg';
import { useSearchParams } from 'react-router-dom';

const Filters = ({
    title,
    filters,
    orderings,
}: {
    title: string;
    filters: filter[];
    orderings: orderItem[];
}) => {
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultOrderBy = orderings[0].propertyName;

    const getActiveOrdering = (): string | null => {
        const paramValue = searchParams.get('orderBy');
        return paramValue;
    };

    return (
        <div className={styles['filters']}>
            <h2 className={styles['header']}>{title}</h2>
            <div className={styles['filters-wrapper']}>
                <button className={styles['menu--btn']} ref={menuBtnRef}>
                    <img src={filterIcon} />
                </button>
                <div className={styles['dropdown']}>
                    <select
                        className={styles['dropdown--btn']}
                        name="orderBy"
                        onChange={(e) =>
                            setSearchParams((params) => {
                                params.set(e.target.name, e.target.value);
                                return params;
                            })
                        }
                        value={getActiveOrdering() || defaultOrderBy}
                    >
                        {orderings.map((el, index) => (
                            <option key={index} value={el.propertyName}>
                                {el.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <FilteringSidePanel
                btnRef={menuBtnRef}
                title="Фильтры"
                filters={filters}
            />
        </div>
    );
};

export default Filters;
