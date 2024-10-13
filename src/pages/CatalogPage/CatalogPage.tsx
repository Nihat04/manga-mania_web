import styles from './styles/CatalogPage.module.css';

import { useEffect, useState } from 'react';

import { getCatalog } from './api/catalogApi';
import { shortManga } from '../../entities/product';

import Filters from '../../features/productsFilter/ui/Filters';
import Catalog from '../../widgets/ui/Catalog/Catalog';
import { orderItem, filter, filterTypes } from '../../features/productsFilter';
import { useSearchParams } from 'react-router-dom';

const DROPDOWN_FILTERS: orderItem[] = [
    { label: 'Популярное', propertyName: 'Popular' },
    { label: 'Кол-во отзывов', propertyName: 'Reviews' },
    { label: 'Возрастание цены', propertyName: 'Price' },
    { label: 'Убыванию цены', propertyName: 'PriceDesc' },
];

const FILTER_MENU: filter[] = [
    {
        label: 'цена',
        propertyName: 'Price',
        type: filterTypes.range,
        range: { min: 0, max: 2000 },
    },
    {
        label: 'год издания',
        propertyName: 'ReleaseYear',
        type: filterTypes.range,
        range: { min: 0, max: 2024 },
    },
    {
        label: 'возраст',
        propertyName: 'AgeCategory',
        type: filterTypes.options,
        options: ['18+', '16+', '12+'],
    },
    {
        label: 'издательство',
        propertyName: 'publishingHouse',
        type: filterTypes.options,
        options: ['XL Media', 'Азбука-Аттикус'],
    },
    {
        label: 'переплёт',
        propertyName: 'Cover',
        type: filterTypes.options,
        options: ['Hard', 'Soft'],
    },
    {
        label: 'авторы',
        propertyName: 'Author',
        type: filterTypes.options,
        options: [
            'Хиро Масима',
            'Кэн Вакуи',
            'Кэнтаро Миура',
            'Цугуми Ооба и Такэси Обата',
            'Хадзимэ Исаяма',
        ],
    },
    {
        label: 'жанры',
        propertyName: 'Genre',
        type: filterTypes.options,
        options: [
            'Боевик',
            'Драма',
            'Приключения',
            'Фэнтези',
            'Сёнэн',
            'Трагедия',
            'Спорт',
        ],
    },
];

const CatalogPage = () => {
    const [catalog, setCatalog] = useState<shortManga[]>([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getCatalog(window.location.search).then((res) => setCatalog(res));
    }, [searchParams]);

    return (
        <main className={styles['main']}>
            <section>
                <Filters
                    title="Манга"
                    filters={FILTER_MENU}
                    orderings={DROPDOWN_FILTERS}
                />
            </section>
            <section className={styles['catalog-section']}>
                <Catalog products={catalog} />
            </section>
        </main>
    );
};

export default CatalogPage;
