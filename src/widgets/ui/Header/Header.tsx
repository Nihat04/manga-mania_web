import styles from './styles/Header.module.css';

import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../features/store/store';
import classNames from 'classnames';

import MenuSidePanel from '../../../shared/ui/SidePanel/MenuSidePanel';
import SearchMenu from './ui/SearchMenu/SearchMenu';

import menuIcon from './svg/menu.svg';
import favoriteIcon from '../../../shared/assets/svg/favorite.svg';
import cartIcon from '../../../shared/assets/svg/cart.svg';
import profileIcon from './svg/profile.svg';
import crossIcon from './svg/cross.svg';
import favoriteFilledIcon from '../../../shared/assets/svg/favorite-filled.svg';
import cartFilledIcon from '../../../shared/assets/svg/cart-filled.svg';
import profileFilledIcon from './svg/profile-filled.svg';
import mainLogo from '../../../shared/assets/svg/mainLogo.svg';

type navLink = {
    label: string;
    icon: string;
    activeIcon: string;
    path: string;
};

const NAV_LINKS: navLink[] = [
    {
        label: 'избраное',
        icon: favoriteIcon,
        activeIcon: favoriteFilledIcon,
        path: '/favorites',
    },
    {
        label: 'корзина',
        icon: cartIcon,
        activeIcon: cartFilledIcon,
        path: '/cart',
    },
    {
        label: 'профиль',
        icon: profileIcon,
        activeIcon: profileFilledIcon,
        path: '/profile',
    },
];

const MENU = {
    top: [
        { label: 'Манга', link: '/catalog' },
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
    const location = useLocation();
    const cart = useSelector((state: RootState) => state.cart.cart);

    const setSearchBar = (state: boolean) => {
        setTimeout(() => {
            if (state) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }

            setSearchVisible(state);
        }, 50);
    };

    const getNavIcon = (nav: navLink) => {
        if (location.pathname === nav.path) {
            return nav.activeIcon;
        }

        return nav.icon;
    };

    return (
        <header className={styles['header']}>
            <div
                className={classNames(styles['logo'], {
                    [styles['logo--hidden']]: searchVisible,
                })}
            >
                <Link to={'/'}>
                    <img
                        className={styles['logo__img']}
                        src={mainLogo}
                        alt="Manga Mania"
                    />
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
                                    src={getNavIcon(link)}
                                    alt={link.label}
                                />
                                <p className={styles['nav__label']}>
                                    {link.label}
                                </p>
                            </Link>
                            {link.path === '/cart' && (
                                <div className={styles['cart-counter']}>
                                    {cart.length}
                                </div>
                            )}
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
            <div
                className={classNames(styles['search-menu'], {
                    [styles['search-menu--visible']]: searchVisible,
                })}
            >
                <SearchMenu searchString={search} setSearchString={setSearch} />
            </div>
        </header>
    );
};

export default Header;
