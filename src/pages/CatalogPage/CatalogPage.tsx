import styles from './styles/CatalogPage.module.css';

import { useEffect, useState } from 'react';

import { getCatalog } from './api/catalogApi';
import { shortManga } from '../../entities/product';

import Filters from '../../features/productsFilter/ui/Filters';
import ProductPanel from '../../entities/product/ui/ProductPanel/ProductPanel';

const CatalogPage = () => {
    const [catalog, setCatalog] = useState<shortManga[]>([]);

    useEffect(() => {
        getCatalog().then((res) => setCatalog(res));
    }, []);

    return (
        <main className={styles['main']}>
            <section>
                <Filters title="Манга" />
            </section>
            <section className={styles['catalog-section']}>
                <ul className={styles['catalog__list']}>
                    {catalog.map((el) => (
                        <li key={el.id} className={styles['catalog__item']}>
                            <ProductPanel product={el} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CatalogPage;
