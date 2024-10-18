import 'swiper/css';
import 'swiper/css/effect-coverflow';
import styles from '../styles/CoverflowSwiper.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import { shortManga } from '../../../entities/product';
import { API_URL } from '../../../shared/config';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const CoverflowSwiper = ({ products }: { products: shortManga[] }) => {
    const [activeProduct, setActiveProduct] = useState<shortManga>(products[0]);

    useEffect(() => {
        setActiveProduct(products[0]);
    }, [products]);

    return (
        <div className={styles['coverflow-swiper']}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow]}
                onSlideChange={(swiper) =>
                    setActiveProduct(products[swiper.activeIndex])
                }
                className={styles['swiper']}
            >
                {products.map((product) => (
                    <SwiperSlide
                        key={product.id}
                        className={styles['swiper-slide']}
                    >
                        <Link to={`product/${product.id}`}>
                            <img
                                className={classNames(styles['img'], {
                                    [styles['img--active']]:
                                        activeProduct &&
                                        activeProduct.id === product.id,
                                })}
                                src={API_URL + product.imageUrls[0]}
                                alt={product.name}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <p className={styles['label']}>Токийские мстители</p>
        </div>
    );
};
