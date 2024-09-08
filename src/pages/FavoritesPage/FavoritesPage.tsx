import styles from './styles/FavoritesPage.module.css';

import { useEffect, useState } from 'react';

import { getFavorites } from './api';

import Filters from '../../shared/ui/Filters/Filters';
import ProductPanel from '../../shared/ui/ProductPanel/ProductPanel';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getFavorites().then((res) => setFavorites(res));
    }, []);

    return (
        <main>
            <section>
                <Filters title="Избранное" />
            </section>
            <section className={styles['favorites']}>
                <ul className={styles['favorites__list']}>
                    {favorites.map((el) => (
                        <li key={el.id} className={styles['favorites__item']}>
                            <ProductPanel key={el.id} product={el} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default FavoritesPage;
