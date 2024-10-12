import styles from '../../styles/Filters.module.css';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { range } from '../../model';

const RangeItem = ({
    label,
    propertyName,
    range,
}: {
    label: string;
    propertyName: string;
    range: range;
}) => {
    const [currentRange, setCurrentRange] = useState<range>({ ...range });
    const [searchParams, setSearchParams] = useSearchParams();
    const setRange = (limitName: string, value: number) => {
        setCurrentRange({ ...currentRange, [limitName]: value });

        const paramPropertyName = limitName + propertyName;

        setSearchParams((params) => {
            if (value || value === 0) {
                params.set(paramPropertyName, String(value));
            } else {
                params.delete(paramPropertyName);
            }

            return params;
        });
    };

    const getActiveRange = (): range => {
        const paramMinValue = searchParams.get(`min${propertyName}`);
        const paramMaxValue = searchParams.get(`max${propertyName}`);

        const activeRange = {
            min: range.min,
            max: range.max,
        };

        if (paramMinValue) {
            activeRange.min = Number(paramMinValue);
        }
        if (paramMaxValue) {
            activeRange.max = Number(paramMaxValue);
        }

        return activeRange;
    };

    useEffect(() => {
        setCurrentRange(getActiveRange());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (
        <li className={styles['item']}>
            <p className={styles['item__name']}>{label}</p>
            <p>
                от{' '}
                <input
                    className={styles['range__input']}
                    type="number"
                    name="min"
                    defaultValue={currentRange.min}
                    onBlur={(e) =>
                        setRange(e.target.name, Number(e.target.value))
                    }
                />{' '}
                до{' '}
                <input
                    className={styles['range__input']}
                    type="number"
                    name="max"
                    defaultValue={currentRange.max}
                    onBlur={(e) =>
                        setRange(e.target.name, Number(e.target.value))
                    }
                />
            </p>
        </li>
    );
};

export default RangeItem;
