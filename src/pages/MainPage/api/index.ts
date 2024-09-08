import testImg1 from '../../../../public/img/test/voley.png';
import testImg2 from '../../../../public/img/test/blue.png';
import testImg3 from '../../../../public/img/test/hori.png';
import testImg4 from '../../../../public/img/test/svhool.png';
import testImg5 from '../../../../public/img/test/dorogaUnost.png';
import testImg6 from '../../../../public/img/test/poraUnost.png';
import testImg7 from '../../../../public/img/test/dedUmer.png';
import testImg8 from '../../../../public/img/test/Krokodil.png';
import testImg9 from '../../../../public/img/test/pidorkiOnline.png';

export async function getFeaturedSeries() {
    const test = [
        {
            caption: 'ВОЛЕЙБОЛ',
            img: testImg1,
            color: '#fca717',
        },
        {
            caption: 'БЛЮ ЛОК',
            img: testImg2,
            color: '#018ac0',
        },
        {
            caption: 'ХОРИМИЯ',
            img: testImg3,
            color: '#ECA1B1',
        },
    ];

    return test;
}

export async function getFeaturedGenres() {
    return [
        {
            id: 1,
            title: 'ШКОЛА',
            img: testImg4,
            products: [
                {
                    id: 1,
                    name: 'Операция настоящая любовь',
                    img: testImg6,
                    price: 700,
                },
                {
                    id: 2,
                    name: 'Дорога юности',
                    img: testImg5,
                    price: 700,
                },
                {
                    id: 3,
                    name: 'Моя причина умереть',
                    img: testImg7,
                    price: 700,
                },
            ],
        },
        {
            id: 2,
            title: 'СПОРТ',
            img: testImg4,
            products: [
                {
                    id: 1,
                    name: 'Волейбол',
                    img: testImg1,
                    price: 700,
                },
                {
                    id: 2,
                    name: 'Баскетбол Куроко',
                    img: testImg8,
                    price: 700,
                },
                {
                    id: 3,
                    name: 'Вольный стиль',
                    img: testImg9,
                    price: 700,
                },
            ],
        },
    ];
}
