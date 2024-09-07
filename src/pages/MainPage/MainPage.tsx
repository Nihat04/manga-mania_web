import styles from './styles/index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carousel.css';

import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import testImg1 from '../../../public/img/test/voley.png';
import testImg2 from '../../../public/img/test/blue.png';
import testImg3 from '../../../public/img/test/hori.png';
import { useEffect } from 'react';

type categoryType = {
    label: string;
};

const CATEGORIES: categoryType[] = [
    { label: 'Популярное' },
    { label: 'Новинки' },
    { label: 'Скидки' },
];

const SERIES = [
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

const MainPage = () => {
    const updateColor = (index: number) => {
        const carousel = document.querySelector('.carousel');

        const animation = {
            '0%': {
                'background-position': '0 top',
            },
            '100%': {
                'background-position': '50% top',
            },
        };

        // carousel.style.backgroundPosition = `${calculateSectionPosition(index)}% top`;
        carousel.animate(
            [
                { backgroundPosition: 0 },
                { backgroundPosition: calculateSectionPosition(index) },
            ],
            {
                duration: 3000,
                iterations: 1,
            }
        );
        console.log(carousel.style.animation);
    };

    useEffect(() => {
        const carousel = document.querySelector('.carousel');

        let gradientString = '';

        for (let i = 0; i < SERIES.length; i++) {
            gradientString += `, ${SERIES[i].color} ${calculateSectionSize(i)}%`;
        }

        carousel.style.backgroundImage = `linear-gradient(90deg${gradientString})`;
        carousel.style.backgroundSize = `${SERIES.length * 90}% 100%`;
    }, []);

    const calculateSectionSize = (index: number) => {
        const count = SERIES.length;

        return (100 / (count * 2)) * (1 + index * 2);
    };

    const calculateSectionPosition = (index: number) => {
        const count = SERIES.length;

        return index * (100 / (count - 1));
    };

    return (
        <main className={styles['main']}>
            <section className={styles['categories']}>
                <ul className={styles['categories__list']}>
                    {CATEGORIES.map((el, index) => (
                        <li className={styles['categories__item']} key={index}>
                            <a href="#">{el.label}</a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles['series']}>
                <Carousel
                    autoPlay={false}
                    infiniteLoop={false}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={80}
                    onChange={(index, e) => console.log(e)}
                >
                    {SERIES.map((el, index) => (
                        <div key={index} className={styles['series__item']}>
                            <img
                                className={styles['series__item__img']}
                                src={el.img}
                            />
                            <p className={styles['series__item__caption']}>
                                {el.caption}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </section>
        </main>
    );
};

export default MainPage;
