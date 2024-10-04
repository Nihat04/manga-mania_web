import styles from './styles/PopularCategory.module.css';

import { useEffect, useState } from 'react';

import { genre, getFeaturedGenres, getFeaturedSeries } from '../../../api';

import ColoredSwiper from '../../../../../features/swiper/ui/ColoredSwiper';

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
                    <p key={index}>HAHAHA</p>
                ))}
            </div>
        </section>
    );
};

export default PopularCategory;
