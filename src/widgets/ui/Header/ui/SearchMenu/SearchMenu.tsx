import '../../styles/Header.module.css';
import styles from './styles/SearchMenu.module.css';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

const SearchMenu = ({ search }: { search: string }) => {
    const render = () => {
        if (search) {
            return (
                <div>
                    <ul>
                        <li className={styles['link-wrapper']}>
                            <Link className={styles['link']} to="/">
                                Токийский гуль
                            </Link>
                        </li>
                        <li className={styles['link-wrapper']}>
                            <Link className={styles['link']} to="/">
                                Токийские мстители
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="">
                    <div className={styles['search-param']}>
                        <p className={styles['search-param__text']}>История</p>
                        <button className={styles['search-param__btn']}>
                            очистить
                        </button>
                    </div>
                    <ul>
                        <li className={styles['link-wrapper']}>
                            <Link className={styles['link']} to="/">
                                Токийский гуль
                            </Link>
                            <button className={styles['link__btn']}></button>
                        </li>
                        <li className={styles['link-wrapper']}>
                            <Link className={styles['link']} to="/">
                                Токийские мстители
                            </Link>
                            <button className={styles['link__btn']}></button>
                        </li>
                    </ul>
                </div>
            );
        }
    };

    return (
        <div className={classNames(styles['search-menu'])}>
            {render()}
            <div className=""></div>
        </div>
    );
};

/* Историю поиска будем хранить в локал стораге */

export default SearchMenu;
