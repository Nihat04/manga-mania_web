import styles from '../../styles/Filters.module.css';

import classNames from 'classnames';
import { useState } from 'react';

const OptionsItem = (props: { name: string; options: string[] }) => {
    const { name, options } = props;
    const [open, setOpen] = useState(false);

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
                {name}
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
