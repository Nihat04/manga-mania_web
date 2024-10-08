import styles from './styles/ProductPanel.module.css';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { API_URL } from '../../../../shared/config';
import { manga, shortManga } from '../../model';

import { BuyButton } from '../../../../shared/ui/BuyButton';

import WishlistButton from '../../../../shared/ui/WishlistButton/WishlistButton';

const ProductPanel = ({
    product,
    multiImg = false,
}: {
    product: shortManga | manga;
    multiImg?: boolean;
}) => {
    const renderImage = () => {
        if (multiImg) {
            return (
                <Swiper>
                    {product.imageUrls.map((img) => (
                        <SwiperSlide>
                            <img
                                className={styles['img']}
                                src={API_URL + img}
                                alt=""
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        } else {
            return (
                <img
                    className={styles['img']}
                    src={API_URL + product.imageUrls[0]}
                />
            );
        }
    };

    return (
        <div className={styles['product']}>
            <div className={styles['img--wrapper']}>
                <Link to={`/product/${product.id}`}>{renderImage()}</Link>
            </div>
            <div className={styles['wishlist-btn']}>
                <WishlistButton productId={product.id} />
            </div>
            <p className={styles['name']}>{product.name}</p>
            <div className={styles['bottom']}>
                <p className={styles['price']}>{product.price + '₽'}</p>
                <BuyButton product={product} />
            </div>
        </div>
    );
};

export default ProductPanel;
