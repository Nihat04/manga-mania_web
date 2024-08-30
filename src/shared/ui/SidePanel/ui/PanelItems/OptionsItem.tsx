import styles from '../../styles/SidePanel.module.css';

const OptionsItem = (props: { name: string; options: string[] }) => {
    const { name, options } = props;

    return (
        <li>
            <p className={styles['item__name']}>{name}</p>
            <ul className={styles['options__list']}>
                {options.map((option, index) => (
                    <li key={index} className={styles['options__item']}>
                        <input
                            className={styles['options__checkbox']}
                            type="checkbox"
                        />
                        <span className={styles['item__name']}>{option}</span>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default OptionsItem;
