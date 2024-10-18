import 'swiper/css';
import 'swiper/css/navigation';
import styles from './styles/ProductPanel.module.css';

import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { API_URL } from '../../../../shared/config';
import { manga, shortManga } from '../../model';

import { BuyButton } from '../../../../shared/ui/BuyButton';

import { WishlistButton } from '../../../../shared/ui';

const ProductPanel = ({
    product,
    multiImg = false,
    fixedHeight = null,
}: {
    product: shortManga | manga;
    multiImg?: boolean;
    fixedHeight?: number | null;
}) => {
    const renderImage = () => {
        if (multiImg) {
            return (
                <Swiper navigation={true} modules={[Navigation]}>
                    {product.imageUrls.map((img, index) => (
                        <SwiperSlide key={index}>
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
                    style={{ height: fixedHeight ? fixedHeight - 86 : '100%' }}
                />
            );
        }
    };

    return (
        <div
            className={styles['product']}
            style={{ height: fixedHeight || '100%' }}
        >
            <Link className={styles['img--link']} to={`/product/${product.id}`}>
                {renderImage()}
            </Link>
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
