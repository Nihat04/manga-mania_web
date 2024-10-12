import styles from '../../styles/Filters.module.css';

import classNames from 'classnames';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const OptionsItem = ({
    label,
    propertyName,
    options,
}: {
    label: string;
    propertyName: string;
    options: string[];
}) => {
    const [open, setOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const setOption = (option: string) => {
        setSearchParams((params) => {
            const currentParams = searchParams.getAll(propertyName);

            if (!currentParams.includes(option)) {
                params.append(propertyName, option);
            } else {
                params.delete(propertyName, option);
            }
            return params;
        });
    };

    const isActive = (option: string): boolean => {
        const paramValues = searchParams.getAll(propertyName);

        if (paramValues.includes(option)) return true;

        return false;
    };

    return (
        <li>
            <p
                className={classNames(
                    styles['item__name'],
                    styles['item__dropdown'],
                    {
                        [styles['item__dropdown--open']]: open,
                    }
                )}
                onClick={() => setOpen(!open)}
            >
                {label}
            </p>
            <ul
                className={classNames(styles['options__list'], {
                    [styles['options__list-visible']]: open,
                })}
            >
                {options.map((option, index) => (
                    <li key={index} className={styles['options__item']}>
                        <input
                            className={styles['options__checkbox']}
                            type="checkbox"
                            onChange={() => setOption(option)}
                            checked={isActive(option)}
                        />
                        <label className={styles['option__name']}>
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default OptionsItem;
