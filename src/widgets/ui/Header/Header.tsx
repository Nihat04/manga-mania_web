import styles from './styles/Header.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import menuIcon from './svg/menu.svg';
import favoriteIcon from '../../../shared/assets/svg/favorite.svg';
import cartIcon from './svg/cart.svg';
import profileIcon from './svg/profile.svg';

type navLink = {
    label: string;
    icon: string;
    path: string;
};

const Header = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    const navLinks: navLink[] = [
        { label: 'каталог', icon: menuIcon, path: '/catalog' },
        { label: 'избраное', icon: favoriteIcon, path: '/catalog' },
        { label: 'корзина', icon: cartIcon, path: '/cart' },
        { label: 'профиль', icon: profileIcon, path: '/profile' },
    ];

    const search = (
        e:
            | React.MouseEvent<HTMLInputElement>
            | React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (!searchVisible) {
            setSearchVisible(true);
            return;
        }

        if (getRelativeCoordinates(e)[0] <= 165) return;
    };

    const getRelativeCoordinates = (e: React.MouseEvent<HTMLInputElement>) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; //x position within the element.
        const y = e.clientY - rect.top; //y position within the element.

        return [x, y];
    };

    return (
        <header className={styles['header']}>
            <div className={styles['logo']}>
                <Link to={'/'}>
                    <p className={styles['logo__text']}>Mm</p>
                </Link>
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
            <input
                className={classNames(styles['search'], {
                    [styles['search-visible']]: searchVisible,
                })}
                type="text"
                onClick={(e) => search(e)}
                onBlur={() => setSearchVisible(false)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') search(e);
                }}
            />
        </header>
    );
};

export default Header;
