import styles from './styles/PopularCategory.module.css';

import { useEffect, useState } from 'react';

import {
    genre,
    getFeaturedGenres,
    getFeaturedSeries,
} from '../../../../../entities/product';

import ColoredSwiper from '../../../../../features/swiper/ui/ColoredSwiper';
import ImageSwiper from '../../../../../features/swiper/ui/ImageSwiper';
import ProductPanel from '../../../../../entities/product/ui/ProductPanel/ProductPanel';
import { TextLoader } from '../../../../../widgets/ui/Loader';
import { createNotification } from '../../../../../features/notifications';
import { useDispatch } from 'react-redux';

const PopularCategory = () => {
    const [featuredGenres, setFeaturedGenres] = useState<genre[]>();
    const [featuredSeries, setFeaturedSeries] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getFeaturedGenres()
            .then((res) => setFeaturedGenres(res))
            .catch(() =>
                createNotification({
                    header: 'Ошибка',
                    bodyText: 'Не удалось связяться с сервисом',
                })(dispatch)
            );
        getFeaturedSeries().then((res) => setFeaturedSeries(res));
    }, []);

    return (
        <section>
            <div className={styles['featured-series']}>
                <ColoredSwiper elements={featuredSeries} />
            </div>
            <div className={styles['featured-genres']}>
                {featuredGenres ? (
                    featuredGenres.map((genre, index) => (
                        <div key={index}>
                            <ImageSwiper
                                bg={genre.bgImgUrl}
                                title={genre.title}
                                elements={genre.products.map((product) => (
                                    <div style={{ backgroundColor: '#ffffff' }}>
                                        <ProductPanel
                                            product={product}
                                            fixedHeight={275}
                                        />
                                    </div>
                                ))}
                            />
                        </div>
                    ))
                ) : (
                    <TextLoader />
                )}
            </div>
        </section>
    );
};

export default PopularCategory;
