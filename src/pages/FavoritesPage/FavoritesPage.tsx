import styles from './styles/FavoritesPage.module.css';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../features/store/store';
import { PageHeader } from '../../shared/ui';

import ProductPanel from '../../entities/product/ui/ProductPanel/ProductPanel';
import { UnauthorizedModal } from '../../features/modal';

const FavoritesPage = () => {
    const user = useSelector((state: RootState) => state.user.user);
    const wishlist = useSelector((state: RootState) => state.user.wishlist);
    const [modal, setModal] = useState<JSX.Element>();

    useEffect(() => {
        if (!(user || wishlist)) {
            setModal(<UnauthorizedModal />);
        }
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
            {modal}
        </main>
    );
};

export default FavoritesPage;
