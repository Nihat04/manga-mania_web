import styles from './styles/index.module.css';

export const PageHeader = ({ children }: { children: string }) => {
    return <h2 className={styles['header']}>{children}</h2>;
};
