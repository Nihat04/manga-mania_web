import styles from './styles/SidePanel.module.css';

import SidePanel from './SidePanel';
import LinkItem from './ui/PanelItems/LinkItem';

type MenuItem = {
    label: string;
    link: string;
};

const MenuSidePanel = ({
    btnRef,
    title,
    top,
    bottom = [],
}: {
    btnRef: React.RefObject<HTMLButtonElement>;
    title: string;
    top: MenuItem[];
    bottom?: MenuItem[];
}) => {
    return (
        <SidePanel btnRef={btnRef} title={title}>
            <div className={styles['menu']}>
                <div className={styles['menu__top']}>
                    <ul className={styles['menu__list']}>
                        {top.map((el, index) => (
                            <li key={index} className={styles['menu__item']}>
                                <LinkItem to={el.link}>{el.label}</LinkItem>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles['menu__bottom']}>
                    <ul className={styles['menu__list']}>
                        {bottom.map((el, index) => (
                            <li key={index} className={styles['menu__item']}>
                                <LinkItem to={el.link}>{el.label}</LinkItem>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SidePanel>
    );
};

export default MenuSidePanel;
