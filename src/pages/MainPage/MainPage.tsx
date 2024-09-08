import styles from './styles/index.module.css';

import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import SeriesCarousel from './ui/SeriesCarousel/SeriesCarousel';
import GenreCarousel from './ui/GenreCarousel/GenreCarousel';
import { getFeaturedGenres } from './api';

type categoryType = {
    name: string;
    label: string;
};

const MainPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [featuredGenres, setFeaturedGenres] = useState([]);
    const categoryParam = searchParams.get('category');

    const categories: categoryType[] = [
        {
            name: 'popular',
            label: 'Популярное',
        },
        {
            name: 'latestRelease',
            label: 'Новинки',
        },
        {
            name: 'discount',
            label: 'Скидки',
        },
    ];

    const getCurrentCategory = (category: categoryType): boolean => {
        return categoryParam === category.name;
    };

    useEffect(() => {
        getFeaturedGenres().then((res) => setFeaturedGenres(res));
    }, []);

    return (
        <main className={styles['main']}>
            <section className={styles['categories']}>
                <ul className={styles['categories__list']}>
                    {categories.map((el, index) => (
                        <li
                            className={classNames(styles['categories__item'], {
                                [styles['categories__item--selected']]:
                                    getCurrentCategory(el),
                            })}
                            key={index}
                        >
                            <a
                                onClick={() =>
                                    setSearchParams((params) => {
                                        params.set('category', el.name);
                                        return params;
                                    })
                                }
                            >
                                {el.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles['featured-series']}>
                <SeriesCarousel />
            </section>
            <section className={styles['featured-genres']}>
                {featuredGenres.map((el) => (
                    <GenreCarousel
                        key={el.id}
                        title={el.title}
                        bgImage={el.img}
                        products={el.products}
                    />
                ))}
            </section>
        </main>
    );
};

export default MainPage;
