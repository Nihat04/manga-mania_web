import { useState } from 'react';
import styles from '../../styles/SidePanel.module.css';

const RangeItem = ({
    name,
    range,
}: {
    name: string;
    range: { start: number; end: number };
}) => {
    const [currentRange, setCurrentRange] = useState({ ...range });

    const setRange = (propertyName: string, value: number) => {
        setCurrentRange({ ...currentRange, [propertyName]: value });
    };

    return (
        <li className={styles['item']}>
            <p className={styles['item__name']}>{name}</p>
            <p>
                от{' '}
                <input
                    className={styles['range__input']}
                    type="number"
                    name="start"
                    min={currentRange.start}
                    value={currentRange.start}
                    onChange={(e) => setRange(e.target.name, e.target.value)}
                />{' '}
                до{' '}
                <input
                    className={styles['range__input']}
                    type="number"
                    name="end"
                    max={currentRange.end}
                    value={currentRange.end}
                    onChange={(e) => setRange(e.target.name, e.target.value)}
                />
            </p>
        </li>
    );
};

export default RangeItem;
