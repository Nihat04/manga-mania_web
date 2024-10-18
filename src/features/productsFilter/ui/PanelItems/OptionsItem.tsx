import styles from '../../styles/Filters.module.css';
import { useSearchParams } from 'react-router-dom';

import { DroppingMenu } from '../../../../shared/ui/DroppingMenu';

const OptionsItem = ({
    label,
    propertyName,
    options,
}: {
    label: string;
    propertyName: string;
    options: string[];
}) => {
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
            <DroppingMenu label={label}>
                <ul className={styles['options__list']}>
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
            </DroppingMenu>
        </li>
    );
};

export default OptionsItem;
