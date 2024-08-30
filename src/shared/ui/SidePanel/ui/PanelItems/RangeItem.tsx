import styles from '../../styles/SidePanel.module.css';

const RangeItem = (props: {
    name: string;
    range: { start: number; end: number };
}) => {
    const { name, range } = props;

    return (
        <li className={styles['item']}>
            <p className={styles['item__name']}>{name}</p>
            <p>
                от{' '}
                <input
                    className={styles['range__input']}
                    type="number"
                    min={range.start}
                    value={range.start}
                />{' '}
                до{' '}
                <input
                    className={styles['range__input']}
                    type="number"
                    max={range.end}
                    value={range.end}
                />
            </p>
        </li>
    );
};

export default RangeItem;
