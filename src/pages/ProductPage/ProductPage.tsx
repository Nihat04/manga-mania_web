import styles from './styles/ProductPage.module.css';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProduct } from './api/productApi';
import { manga } from '../../entities/product';

import ProductPanel from '../../entities/product/ui/ProductPanel/ProductPanel';
import { PageHeader } from '../../shared/ui';

type prop = {
    title: string;
    body: JSX.Element;
};

type characteristic = {
    propertyName: string;
    label: string;
};

const CHARACTERISTICS: characteristic[] = [
    { propertyName: 'weight', label: 'Вес:' },
    { propertyName: 'source', label: 'Источник:' },
    { propertyName: 'publishingHouse', label: 'Издательство:' },
    { propertyName: 'size', label: 'Размер:' },
    { propertyName: 'pagesNumber', label: 'Количество страниц:' },
    { propertyName: 'releaseYear', label: 'Год выпуска:' },
    { propertyName: 'genreString', label: 'Жанр:' },
    { propertyName: 'coverType', label: 'Обложка:' },
    { propertyName: 'authorName', label: 'Автор:' },
];

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<manga>();
    const [currentProperty, setCurrentProperty] = useState<prop>();

    const properties: prop[] = [
        {
            title: 'Описание',
            body: (
                <div className={styles['property__info__paragraph']}>
                    {product?.description}
                </div>
            ),
        },
        {
            title: 'Характеристика',
            body: product ? (
                <div className="">
                    <table className={styles['table']}>
                        <tbody>
                            {CHARACTERISTICS.map((charac, index) => {
                                const productCharac =
                                    product[charac.propertyName];

                                if (!productCharac) return <></>;

                                console.log(productCharac);
                                return (
                                    <tr
                                        className={styles['table__row']}
                                        key={index}
                                    >
                                        <td
                                            className={
                                                styles['table__row__section']
                                            }
                                        >
                                            {charac.label}
                                        </td>
                                        <td
                                            className={
                                                styles['table__row__section']
                                            }
                                        >
                                            {productCharac}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <></>
            ),
        },
        {
            title: 'Отзывы',
            body: <div className="">{}</div>,
        },
    ];

    useEffect(() => {
        if (id) {
            getProduct(Number(id)).then((res) => {
                setProduct(res);
                setCurrentProperty(properties[0]);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <main>
            <PageHeader>Манга</PageHeader>
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
                <ul className={styles['properties__btns']}>
                    {properties.map((el, index) => (
                        <li key={index} className={styles['properties__item']}>
                            <button
                                className={styles['properties-title--btn']}
                                onClick={() => setCurrentProperty(el)}
                            >
                                {el.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles['properties__info']}>
                    {currentProperty?.body}
                </div>
            </section>
            <section className={styles['similar']}>
                <ul className={styles['similar__list']}></ul>
            </section>
        </main>
    );
};

export default ProductPage;
