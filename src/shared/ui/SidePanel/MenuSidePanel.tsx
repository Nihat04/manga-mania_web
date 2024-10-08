import styles from './styles/SidePanel.module.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import SidePanel from './SidePanel';

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
    const [open, setOpen] = useState<boolean>(false);

    return (
        <SidePanel
            btnRef={btnRef}
            title={title}
            panelState={{ state: open, setState: setOpen }}
        >
            <div className={styles['menu']}>
                <div className={styles['menu__top']}>
                    <ul className={styles['menu__list']}>
                        {top.map((el, index) => (
                            <li key={index} className={styles['menu__item']}>
                                <Link
                                    to={el.link}
                                    onClick={() => setOpen(false)}
                                >
                                    {el.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles['menu__bottom']}>
                    <ul className={styles['menu__list']}>
                        {bottom.map((el, index) => (
                            <li key={index} className={styles['menu__item']}>
                                <Link to={el.link}>{el.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SidePanel>
    );
};

export default MenuSidePanel;
