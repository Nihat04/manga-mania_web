import styles from './styles/ProductPage.module.css';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProduct } from './api/productApi';
import { manga } from '../../entities/product';

import Filters from '../../features/productsFilter/ui/Filters';
import ProductPanel from '../../entities/product/ui/ProductPanel/ProductPanel';

enum propTypes {
    decription,
    characterisitcs,
    reviews,
}

type prop = {
    title: string;
    type: propTypes;
};

const PROPS: prop[] = [
    {
        title: 'описание',
        type: propTypes.decription,
    },
    {
        title: 'характеристика',
        type: propTypes.characterisitcs,
    },
    {
        title: 'отзывы',
        type: propTypes.reviews,
    },
];

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<manga>();
    const [currentProperty, setCurrentProperty] = useState<prop | null>(null);

    const renderProperty = (currentProperty: prop) => {
        switch (currentProperty.type) {
            case propTypes.decription:
                return <div>{product?.description}</div>;
            case propTypes.characterisitcs:
                return <div></div>;
            case propTypes.reviews:
                return <div></div>;
            default:
                return <div></div>;
        }
    };

    useEffect(() => {
        if (id) {
            getProduct(Number(id)).then((res) => setProduct(res));
        }
    }, [id]);

    return (
        <main>
            <Filters title="Манга" />
            <section className={styles['product']}>
                <div className={styles['showcase']}>
                    {product && (
                        <ProductPanel product={product} multiImg={true} />
                    )}
                </div>
                <Link to="#" className={styles['product__episode']}>
                    {`Том ${product?.volume}`}
                </Link>
            </section>
            <section className={styles['properties']}>
                <ul className={styles['properties__list']}>
                    {PROPS.map((el, index) => (
                        <li key={index} className={styles['properties__item']}>
                            <button onClick={() => setCurrentProperty(el)}>
                                {el.title}
                            </button>
                        </li>
                    ))}
                </ul>
                {currentProperty && renderProperty(currentProperty)}
            </section>
            <section className={styles['similar']}>
                <ul className={styles['similar__list']}></ul>
            </section>
        </main>
    );
};

export default ProductPage;
