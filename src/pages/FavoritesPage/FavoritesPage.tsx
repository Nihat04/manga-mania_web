import styles from './styles/FavoritesPage.module.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../model/store/store';

import ProductPanel from '../../entities/product/ui/ProductPanel/ProductPanel';
import DecisionModal from '../../shared/ui/Modal/types/DecisionModal';
import { PageHeader } from '../../shared/ui';

const FavoritesPage = () => {
    const [additionalElements, setAdditionalElements] = useState<JSX.Element[]>(
        []
    );
    const user = useSelector((state: RootState) => state.user.user);
    const wishlist = useSelector((state: RootState) => state.user.wishlist);
    const navigate = useNavigate();

    useEffect(() => {
        if (!(user || wishlist)) {
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
    }, [user, wishlist]);

    return (
        <main>
            <section>
                <PageHeader>Избранное</PageHeader>
            </section>
            <section className={styles['favorites']}>
                <ul className={styles['favorites__list']}>
                    {wishlist &&
                        wishlist.map((el) => (
                            <li
                                key={el.id}
                                className={styles['favorites__item']}
                            >
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
