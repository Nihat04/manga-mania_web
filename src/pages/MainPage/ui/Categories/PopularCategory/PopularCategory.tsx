import styles from './styles/PopularCategory.module.css';

import { useEffect, useState } from 'react';

import { genre, getFeaturedGenres } from '../../../api';

import SeriesCarousel from '../../Carousels/SeriesCarousel/SeriesCarousel';
import GenreCarousel from '../../Carousels/GenreCarousel/GenreCarousel';

const PopularCategory = () => {
    const [featuredGenres, setFeaturedGenres] = useState<genre[]>([]);

    useEffect(() => {
        getFeaturedGenres().then((res) => setFeaturedGenres(res));
    }, []);

    return (
        <section>
            <div className={styles['featured-series']}>
                <SeriesCarousel />
            </div>
            <div className={styles['featured-genres']}>
                {featuredGenres.map((genre) => (
                    <GenreCarousel key={genre.id} genre={genre} />
                ))}
            </div>
        </section>
    );
};

export default PopularCategory;
