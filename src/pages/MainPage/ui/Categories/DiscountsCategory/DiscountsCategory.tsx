import styles from './styles/index.module.css';

import { useEffect, useState } from 'react';

import { getDiscountManga } from './api';
import { shortManga } from '../../../../../entities/product';
import { API_URL } from '../../../../../shared/config';
import { Link } from 'react-router-dom';

import { BuyButton } from '../../../../../shared/ui/BuyButton';

import { WishlistButton } from '../../../../../shared/ui';
import { TextLoader } from '../../../../../widgets/ui/Loader';

const DiscountsCategory = () => {
    const [products, setProducts] = useState<shortManga[]>();

    useEffect(() => {
        getDiscountManga()
            .then((res) => setProducts(res))
            .catch(() => console.error('Error when getting discount products'));
    }, []);

    return (
        <>
            {products ? (
                products.map((product) => {
                    return (
                        <div key={product.id} className={styles['product']}>
                            <Link to={`./product/${product.id}`}>
                                <img
                                    className={styles['img']}
                                    src={API_URL + product.imageUrls[0]}
                                    alt={product.name}
                                />
                            </Link>
                            <div className={styles['info']}>
                                <p className={styles['name']}>{product.name}</p>
                                <div className={styles['discount']}>
                                    <p className={styles['discount__new']}>
                                        {product.discount + '₽'}
                                    </p>
                                    <p className={styles['discount__old']}>
                                        {product.price + '₽'}
                                        <svg
                                            viewBox="0 0 240 100"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={
                                                styles['discount__old__line']
                                            }
                                        >
                                            <line
                                                x1="0"
                                                y1="0"
                                                x2="240"
                                                y2="100"
                                                stroke="white"
                                                strokeWidth="15"
                                            />
                                        </svg>
                                    </p>
                                </div>
                                <BuyButton product={product} />
                                <div
                                    className={styles['favorite-btn--wrapper']}
                                >
                                    <WishlistButton productId={product.id} />
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <TextLoader />
            )}
        </>
    );
};

export default DiscountsCategory;
