import styles from '../styles/index.module.css';

import classNames from 'classnames';

import { decisionModal } from '../model/types';

export const DecisionModal = ({ children, btns }: decisionModal) => {
    return (
        <div className={styles['modal']}>
            <div className={styles['information']}>{children}</div>
            <div className={styles['btns']}>
                {btns.map((btn, index) => (
                    <button
                        className={classNames(styles['btn'], 'btn-da')}
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
