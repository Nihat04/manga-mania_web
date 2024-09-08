import classNames from 'classnames';
import styles from './styles/SearchMenu.module.css';
import '../../styles/Header.module.css';

const SearchMenu = ({ search }: { search: string }) => {
    return (
        <div className={classNames(styles['search-menu'])}>
            {!search && <p>История</p>}
            <div className=""></div>
        </div>
    );
};

/* Историю поиска будем хранить в локал стораге */

export default SearchMenu;
