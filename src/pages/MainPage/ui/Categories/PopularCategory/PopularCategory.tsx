import styles from './styles/PopularCategory.module.css';

import { useEffect, useState } from 'react';

import { getFeaturedGenres } from '../../../api';

import SeriesCarousel from '../../Carousels/SeriesCarousel/SeriesCarousel';
import GenreCarousel from '../../Carousels/GenreCarousel/GenreCarousel';

const PopularCategory = () => {
    const [featuredGenres, setFeaturedGenres] = useState([]);

    useEffect(() => {
        getFeaturedGenres().then((res) => setFeaturedGenres(res));
    }, []);

    return (
        <section>
            <div className={styles['featured-series']}>
                <SeriesCarousel />
            </div>
            <div className={styles['featured-genres']}>
                {featuredGenres.map((el) => (
                    <GenreCarousel
                        key={el.id}
                        title={el.title}
                        bgImage={el.bgImgUrl}
                        products={el.products}
                    />
                ))}
            </div>
        </section>
    );
};

export default PopularCategory;
