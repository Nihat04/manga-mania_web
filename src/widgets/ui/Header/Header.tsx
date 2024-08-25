import styles from './Header.module.css';

import { Link } from 'react-router-dom';

import catalogIcon from '../../../assets/svg/catalog.svg';
import favoriteIcon from '../../../assets/svg/favorite.svg';
import cartIcon from '../../../assets/svg/cart.svg';
import profileIcon from '../../../assets/svg/profile.svg';

type navLink = {
    label: string;
    icon: string;
    path: string;
};

const Header = () => {
    const navLinks: navLink[] = [
        { label: 'каталог', icon: catalogIcon, path: '/catalog' },
        { label: 'избраное', icon: favoriteIcon, path: '/catalog' },
        { label: 'корзина', icon: cartIcon, path: '/cart' },
        { label: 'профиль', icon: profileIcon, path: '/profile' },
    ];

    return (
        <header className={styles['header']}>
            <div className={styles['logo']}>
                <p>
                    MANGA
                    <br />
                    MANIA
                </p>
            </div>
            <nav className={styles['nav']}>
                <ul className={styles['nav__list']}>
                    {navLinks.map((link, index) => (
                        <li key={index} className={styles['nav__item']}>
                            <Link
                                className={styles['nav__link']}
                                to={link.path}
                            >
                                <img
                                    className={styles['nav__icon']}
                                    src={link.icon}
                                    alt={link.label}
                                />
                                <p className={styles['nav__label']}>
                                    {link.label}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
