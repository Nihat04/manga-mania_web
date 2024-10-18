import '../../styles/Header.module.css';
import styles from './styles/SearchMenu.module.css';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { search as searchFunc } from './api/searchMenuApi';
import { RootState } from '../../../../../features/store/store';
import searchElement from '../../../../../features/store/search/model/searchModel';
import {
    addSearchHistory,
    deleteSearchHistoryElement,
    deleteSearchHistory,
} from '../../../../../features/store/search/searchSlice';

const SearchMenu = ({
    searchString,
    setSearchString,
}: {
    searchString: string;
    setSearchString: Dispatch<SetStateAction<string>>;
}) => {
    const [searchResults, setSearchResults] = useState<searchElement[]>([]);
    const navigate = useNavigate();
    const searchHistory = useSelector(
        (state: RootState) => state.search.history
    );
    const dispatch = useDispatch();

    const goToProduct = (searchEl: searchElement) => {
        navigate(`/product/${searchEl.id}`);
        dispatch(addSearchHistory(searchEl));
        setSearchString('');
    };

    useEffect(() => {
        if (searchString) {
            setSearchResults([]);
            setTimeout(() => {
                searchFunc(searchString).then((res) => setSearchResults(res));
            }, 1000);
        }
    }, [searchString]);

    const render = () => {
        if (searchString) {
            return (
                <div>
                    <ul>
                        {searchResults.map((el) => (
                            <li key={el.id} className={styles['link-wrapper']}>
                                <p
                                    className={styles['link']}
                                    onClick={() => goToProduct(el)}
                                >
                                    {el.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="">
                    <div className={styles['search-param']}>
                        <p className={styles['search-param__text']}>История</p>
                        <button
                            onClick={() => dispatch(deleteSearchHistory())}
                            className={styles['search-param__btn']}
                        >
                            очистить
                        </button>
                    </div>
                    <ul>
                        {searchHistory.map((searchEl: searchElement) => (
                            <li
                                key={searchEl.id}
                                className={styles['link-wrapper']}
                            >
                                <p
                                    className={styles['p']}
                                    onClick={() => {
                                        goToProduct(searchEl);
                                    }}
                                >
                                    {searchEl.name}
                                </p>
                                <button
                                    className={styles['link__btn']}
                                    onClick={() =>
                                        dispatch(
                                            deleteSearchHistoryElement(
                                                searchEl.id
                                            )
                                        )
                                    }
                                ></button>
                            </li>
                        ))}
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
