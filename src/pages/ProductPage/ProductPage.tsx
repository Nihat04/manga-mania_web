import styles from './styles/ProductPage.module.css';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProduct } from './api/productApi';

import Filters from '../../shared/ui/Filters/Filters';
import ProductPanel from '../../shared/ui/ProductPanel/ProductPanel';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const props = [
        {
            label: 'описание',
        },
        {
            label: 'характеристика',
        },
        {
            label: 'отзывы',
        },
    ];

    useEffect(() => {
        getProduct(id).then((res) => setProduct(res));
    }, []);

    return (
        <main>
            <Filters title="Манга" />
            <section className={styles['product']}>
                <div className={styles['showcase']}>
                    {product && <ProductPanel product={product} />}
                </div>
                <Link to="#" className={styles['product__episode']}>
                    Том 3
                </Link>
            </section>
            <section className={styles['properties']}>
                <ul className={styles['properties__list']}>
                    {props.map((el, index) => (
                        <li key={index} className={styles['properties__item']}>
                            <button>{el.label}</button>
                        </li>
                    ))}
                </ul>
                <div className={styles['properties__displayed']}></div>
            </section>
            <section className={styles['similar']}>
                <ul className={styles['similar__list']}></ul>
            </section>
        </main>
    );
};

export default ProductPage;
