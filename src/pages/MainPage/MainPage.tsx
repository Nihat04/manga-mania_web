import styles from './styles/index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carousel.css';

import SeriesCarousel from './ui/SeriesCarousel/SeriesCarousel';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

type categoryType = {
    name: string;
    label: string;
};

const MainPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const CATEGORIES: categoryType[] = [
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
        return searchParams.get('category') === category.name;
    };

    return (
        <main className={styles['main']}>
            <section className={styles['categories']}>
                <ul className={styles['categories__list']}>
                    {CATEGORIES.map((el, index) => (
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
            <section className={styles['series']}>
                <SeriesCarousel />
            </section>
        </main>
    );
};

export default MainPage;
