import styles from '../../styles/index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carousel.css';

import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';

import { getFeaturedSeries } from '../../api';

const SeriesCarousel = () => {
    const [series, setSeries] = useState([]);
    let bgPosition = 0;

    const updateColor = (value: number) => {
        if (value > 100) {
            value = 100;
        } else if (!value || value < 0) {
            value = 0;
        }

        bgPosition = value;

        const carousel = document.querySelector('.carousel');

        carousel?.animate(
            [
                { backgroundPosition: `${bgPosition}% top` },
                { backgroundPosition: `${value}% top` },
            ],
            {
                duration: 500,
                fill: 'forwards',
            }
        );
    };

    const styleListener = () => {
        const observer = new MutationObserver((mutationList) => {
            const transformValue = mutationList[0].target.style.transform;
            const moveValue: string = transformValue
                .split(',')[0]
                .split('(')[1]
                .replace('%', '');
            const moveValueNumber = -Number(moveValue);
            updateColor(moveValueNumber);
        });

        const slider = document.querySelector('.slider');
        observer.observe(slider, {
            attributes: true,
            attributeFilter: ['style'],
        });
    };

    const applyBackground = () => {
        const carousel = document.querySelector('.carousel');

        let gradientString = '';

        for (let i = 0; i < series.length; i++) {
            gradientString += `, ${series[i].color} ${calculateSectionSize(series, i)}%`;
        }

        carousel.style.backgroundImage = `linear-gradient(90deg${gradientString})`;
        carousel.style.backgroundSize = `${series.length * 90}% 100%`;

        styleListener();
    };

    useEffect(() => {
        getFeaturedSeries().then((res) => setSeries(res));
    }, []);

    const calculateSectionSize = (series, index: number) => {
        const count = series.length;

        return (100 / (count * 2)) * (1 + index * 2);
    };

    const calculateSectionPosition = (index: number) => {
        const count = series.length;

        return index * (100 / (count - 1));
    };
    return (
        <>
            <div onLoad={() => applyBackground()}>
                <Carousel
                    autoPlay={false}
                    infiniteLoop={false}
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={70}
                >
                    {series.map((el, index) => (
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
            </div>
        </>
    );
};

export default SeriesCarousel;
