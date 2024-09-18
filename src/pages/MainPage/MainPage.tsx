import styles from './styles/index.module.css';

import { ReactElement } from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

import PopularCategory from './ui/Categories/PopularCategory/PopularCategory';
import LatestReleasesCategory from './ui/Categories/LatestReleasesCategory/LatestReleasesCategory';
import DiscountsCategory from './ui/Categories/DiscountsCategory/DiscountsCategory';

type categoryType = {
    name: string;
    label: string;
    body: ReactElement;
};

const CATEGORIES: categoryType[] = [
    {
        name: 'popular',
        label: 'Популярное',
        body: <PopularCategory />,
    },
    {
        name: 'latestRelease',
        label: 'Новинки',
        body: <LatestReleasesCategory />,
    },
    {
        name: 'discount',
        label: 'Скидки',
        body: <DiscountsCategory />,
    },
];

const MainPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const getCurrentCategory = (category: categoryType): boolean => {
        return categoryParam === category.name;
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
            <section>
                {CATEGORIES.find((category) => category.name === categoryParam)
                    ?.body || <PopularCategory />}
            </section>
        </main>
    );
};

export default MainPage;
