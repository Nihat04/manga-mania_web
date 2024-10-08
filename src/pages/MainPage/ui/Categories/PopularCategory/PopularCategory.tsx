import styles from './styles/PopularCategory.module.css';

import { useEffect, useState } from 'react';

import { genre, getFeaturedGenres, getFeaturedSeries } from '../../../api';

import ColoredSwiper from '../../../../../features/swiper/ui/ColoredSwiper';
import ImageSwiper from '../../../../../features/swiper/ui/ImageSwiper';
import ProductPanel from '../../../../../entities/product/ui/ProductPanel/ProductPanel';

const PopularCategory = () => {
    const [featuredGenres, setFeaturedGenres] = useState<genre[]>([]);
    const [featuredSeries, setFeaturedSeries] = useState([]);

    useEffect(() => {
        getFeaturedGenres().then((res) => setFeaturedGenres(res));
        getFeaturedSeries().then((res) => setFeaturedSeries(res));
    }, []);

    return (
        <section>
            <div className={styles['featured-series']}>
                <ColoredSwiper elements={featuredSeries} />
            </div>
            <div className={styles['featured-genres']}>
                {featuredGenres.map((genre, index) => (
                    <div key={index}>
                        <ImageSwiper
                            bg={genre.bgImgUrl}
                            title={genre.title}
                            elements={genre.products.map((product) => (
                                <div style={{ backgroundColor: '#ffffff' }}>
                                    <ProductPanel product={product} />
                                </div>
                            ))}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCategory;
