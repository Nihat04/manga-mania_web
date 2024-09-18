import manga from '../../../entities/manga/model/mangaModel';

export async function getFeaturedSeries() {
    const test = [
        {
            caption: 'ВОЛЕЙБОЛ',
            img: '/img/test/voley.png',
            color: '#fca717',
        },
        {
            caption: 'БЛЮ ЛОК',
            img: '/img/test/blue.png',
            color: '#018ac0',
        },
        {
            caption: 'ХОРИМИЯ',
            img: '/img/test/hori.png',
            color: '#ECA1B1',
        },
    ];

    return test;
}

export async function getFeaturedGenres(): Promise<
    {
        id: number;
        title: string;
        bgImgUrl: string;
        products: manga[];
    }[]
> {
    return [
        {
            id: 1,
            title: 'ШКОЛА',
            bgImgUrl: '/img/test/svhool.png',
            products: [
                {
                    id: 1,
                    name: 'Операция настоящая любовь',
                    imgUrl: '/img/manga/1/1_1.png',
                    price: 700,
                },
                {
                    id: 2,
                    name: 'Дорога юности',
                    imgUrl: '/img/manga/1/1_1.png',
                    price: 700,
                },
                {
                    id: 3,
                    name: 'Моя причина умереть',
                    imgUrl: '/img/manga/1/1_1.png',
                    price: 700,
                },
            ],
        },
        {
            id: 2,
            title: 'СПОРТ',
            bgImgUrl: '/img/test/svhool.png',
            products: [
                {
                    id: 1,
                    name: 'Волейбол',
                    imgUrl: '/img/manga/1/1_1.png',
                    price: 700,
                },
                {
                    id: 2,
                    name: 'Баскетбол Куроко',
                    imgUrl: '/img/manga/1/1_1.png',
                    price: 700,
                },
                {
                    id: 3,
                    name: 'Вольный стиль',
                    imgUrl: '/img/manga/1/1_1.png',
                    price: 700,
                },
            ],
        },
    ];
}
