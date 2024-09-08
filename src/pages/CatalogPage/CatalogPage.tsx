import styles from './styles/CatalogPage.module.css';

import { useEffect, useState } from 'react';

import { getCatalog } from './api/catalogApi';

import Filters from '../../shared/ui/Filters/Filters';
import ProductPanel from '../../shared/ui/ProductPanel/ProductPanel';

const CatalogPage = () => {
    const [catalog, setCatalog] = useState([]);

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
                            <ProductPanel key={el.id} product={el} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CatalogPage;
