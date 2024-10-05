import styles from './styles/FavoritesPage.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getWishlist } from '../../shared/api';
import { shortManga } from '../../entities/product';
import { RootState } from '../../model/store/store';

import Filters from '../../features/productsFilter/ui/Filters';
import ProductPanel from '../../entities/product/ui/ProductPanel/ProductPanel';
import DecisionModal from '../../shared/ui/Modal/types/DecisionModal';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<shortManga[]>([]);
    const [additionalElements, setAdditionalElements] = useState<JSX.Element[]>(
        []
    );
    const user = useSelector((state: RootState) => state.user.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            if (user.id) {
                getWishlist(user.id).then((res) => setFavorites(res));
            }
        } else {
            setAdditionalElements([
                ...additionalElements,
                <DecisionModal
                    btns={[
                        {
                            text: 'Войти',
                            action: () => (window.location.href = './login'),
                        },
                        {
                            text: 'Отмена',
                            action: () => navigate(-1),
                        },
                    ]}
                >
                    <div>
                        <p>
                            Нужно войти, чтобы получить доступ к этой странице
                        </p>
                        <p style={{ textAlign: 'center' }}>Войти?</p>
                    </div>
                </DecisionModal>,
            ]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <main>
            <section>
                <Filters title="Избранное" />
            </section>
            <section className={styles['favorites']}>
                <ul className={styles['favorites__list']}>
                    {favorites.map((el) => (
                        <li key={el.id} className={styles['favorites__item']}>
                            <ProductPanel product={el} />
                        </li>
                    ))}
                </ul>
            </section>
            {additionalElements}
        </main>
    );
};

export default FavoritesPage;
