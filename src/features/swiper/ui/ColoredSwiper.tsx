import styles from '../styles/coloredSwiper.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

type element = {
    title: string;
    linkUrl: string;
    imgUrl: string;
    color: string;
};

const ColoredSwiper = ({ elements }: { elements: element[] }) => {
    let bgPosition = 0;

    const updateColor = (value: number) => {
        if (value > 100) {
            value = 100;
        } else if (!value || value < 0) {
            value = 0;
        }

        bgPosition = value;

        const carousel = document.querySelector('.swiper');

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
            console.log(moveValue);
            const moveValueNumber = -Number(moveValue);
            updateColor(moveValueNumber);
        });

        const slider = document.querySelector('.swiper-wrapper');
        observer.observe(slider, {
            attributes: true,
            attributeFilter: ['style'],
        });
    };

    const applyBackground = () => {
        const carousel = document.querySelector('.swiper');

        let gradientString = '';

        for (let i = 0; i < elements.length; i++) {
            gradientString += `, ${elements[i].color} ${calculateSectionSize(i)}%`;
        }

        if (carousel) {
            carousel.style.backgroundImage = `linear-gradient(90deg${gradientString})`;
            carousel.style.backgroundSize = `${elements.length * 90}% 100%`;
        }

        styleListener();
    };

    const calculateSectionSize = (index: number) => {
        const count = elements.length;

        return (100 / (count * 2)) * (1 + index * 2);
    };

    return (
        <div onLoad={() => applyBackground()}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1.5}
                centeredSlides={true}
                pagination={{ clickable: true }}
            >
                {elements.map((el, index) => (
                    <SwiperSlide key={index}>
                        <div key={index} className={styles['item']}>
                            <img
                                className={styles['item__img']}
                                src={el.imgUrl}
                            />
                            <p className={styles['item__title']}>
                                {el.title.toUpperCase()}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ColoredSwiper;
