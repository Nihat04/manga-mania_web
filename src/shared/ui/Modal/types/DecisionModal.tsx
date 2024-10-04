import styles from '../styles/index.module.css';

const DecisionModal = ({
    children,
    btns,
}: {
    children: JSX.Element | string;
    btns: { text: string; action: () => void }[];
}) => {
    return (
        <div className={styles['modal']}>
            <div className={styles['information']}>{children}</div>
            <div className={styles['btns']}>
                {btns.map((btn, index) => (
                    <button
                        className={styles['btn']}
                        key={index}
                        onClick={() => btn.action()}
                    >
                        {btn.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DecisionModal;
