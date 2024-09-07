import styles from './styles/Header.module.css';

import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import MenuSidePanel from '../../../shared/ui/SidePanel/MenuSidePanel';

import menuIcon from './svg/menu.svg';
import favoriteIcon from '../../../shared/assets/svg/favorite.svg';
import cartIcon from '../../../shared/assets/svg/cart.svg';
import profileIcon from './svg/profile.svg';
import crossIcon from './svg/cross.svg';

type navLink = {
    label: string;
    icon: string;
    path: string;
};

const NAV_LINKS: navLink[] = [
    { label: 'избраное', icon: favoriteIcon, path: '/catalog' },
    { label: 'корзина', icon: cartIcon, path: '/cart' },
    { label: 'профиль', icon: profileIcon, path: '/profile' },
];

const MENU = {
    top: [
        { label: 'Манга', link: '/' },
        { label: 'Плакаты', link: '/' },
        { label: 'Брелки', link: '/' },
        { label: 'Мистери бокс', link: '/' },
        { label: 'Кружки', link: '/' },
        { label: 'Коврики', link: '/' },
    ],
    bottom: [
        { label: 'О нас', link: '/' },
        { label: 'Бонусаня карта', link: '/' },
        { label: 'Доставка и оплата', link: '/' },
    ],
};

const Header = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [search, setSearch] = useState('');
    const menuBtnRef = useRef<HTMLButtonElement>(null);

    const setSearchBar = (state: boolean) => {
        setTimeout(() => {
            setSearchVisible(state);
        }, 50);
    };

    // const search = (
    //     e:
    //         | React.KeyboardEvent<HTMLInputElement>
    //         | React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     if (!searchVisible) {
    //         setSearchVisible(true);
    //         return;
    //     }
    // };

    return (
        <header className={styles['header']}>
            <div
                className={classNames(styles['logo'], {
                    [styles['logo--hidden']]: searchVisible,
                })}
            >
                <Link to={'/'}>
                    <p className={styles['logo__text']}>Mm</p>
                </Link>
            </div>
            <nav className={styles['nav']}>
                <ul className={styles['nav__list']}>
                    <li
                        className={classNames(
                            styles['nav__item'],
                            styles['nav__menu']
                        )}
                    >
                        <button
                            className={styles['nav__link']}
                            ref={menuBtnRef}
                        >
                            <img
                                className={styles['nav__icon']}
                                src={menuIcon}
                                alt={'Меню сайта'}
                            />
                            <p className={styles['nav__label']}>Меню</p>
                        </button>
                    </li>
                    {NAV_LINKS.map((link, index) => (
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
            <div className={styles['search--wrapper']}>
                <input
                    className={classNames(styles['search'], {
                        [styles['search-visible']]: searchVisible,
                    })}
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onBlur={() => setSearchBar(false)}
                    onFocus={() => setSearchBar(true)}
                />
                <button
                    className={classNames(styles['search__close-btn'], {
                        [styles['search__close-btn--visible']]: searchVisible,
                    })}
                    onClick={() => setSearch('')}
                >
                    <img
                        className={styles['search__close-btn__img']}
                        src={crossIcon}
                        alt="Закрыть поиск"
                    />
                </button>
            </div>
            <MenuSidePanel
                btnRef={menuBtnRef}
                title="Меню"
                top={MENU.top}
                bottom={MENU.bottom}
            />
        </header>
    );
};

export default Header;
