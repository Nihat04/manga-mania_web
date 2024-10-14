import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/coloredSwiper.module.css';
import '../styles/paginator.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';

type element = {
    title: string;
    linkUrl: string;
    imgUrl: string;
    color: string;
};

const ColoredSwiper = ({ elements }: { elements: element[] }) => {
    const screenWidth = document.body.clientWidth;
    const spaceBetween = 50;
    const bgRef = useRef<HTMLDivElement>(null);

    const applyBg = () => {
        let gradientString = '';

        for (let i = 0; i < elements.length; i++) {
            gradientString += `, ${elements[i].color} ${calculateSectionSize(i)}%`;
        }

        return `linear-gradient(90deg${gradientString})`;
    };

    const calculateSectionSize = (index: number) => {
        const count = elements.length;
        return (100 / (count + 1)) * (index + 1);
    };

    const updateBg = (translateValue: number) => {
        const itemWidth = 204;

        const padding = (screenWidth - itemWidth) / 2;
        const visibleSide = padding - spaceBetween;

        // const firstPosition = visibleSide - itemWidth * 0 - spaceBetween * -1; // 94.5
        // const secondPosition = visibleSide - itemWidth * 1 - spaceBetween * 0; // -159
        // const thirdPosition = visibleSide - itemWidth * 2 - spaceBetween * 1; // -413.5

        // const elementCount = elements.length;
        const elementCount = 3; // почему то элементы пропадают

        const start = visibleSide - itemWidth * 0 - spaceBetween * -1;
        const end =
            visibleSide -
            itemWidth * (elementCount - 1) -
            spaceBetween * (elementCount - 2);

        const position = ((translateValue - start) / (end - start)) * 100;

        if (position > 100 || position < 0) return;

        bgRef.current?.animate([{ backgroundPosition: `${position}% top` }], {
            duration: 300,
            fill: 'forwards',
        });
    };

    const applyStyleListener = (element: HTMLElement) => {
        const observer = new MutationObserver((mutationList) => {
            const el = mutationList[0].target as HTMLElement;
            const transformValue = el.style.transform;
            const moveValue: string = transformValue
                .split(',')[0]
                .split('(')[1]
                .replace('%', '')
                .replace('px', '');

            updateBg(Number(moveValue));
        });

        observer.observe(element, {
            attributes: true,
            attributeFilter: ['style'],
        });
    };

    return (
        <div style={{ position: 'relative' }}>
            <div
                ref={bgRef}
                className={styles['swiper-background']}
                style={{
                    backgroundImage: applyBg(),
                    backgroundSize: `${elements.length * spaceBetween * 2}% 100%`,
                }}
            ></div>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{ clickable: true }}
                className={styles['swiper']}
                onSwiper={(swiper) => applyStyleListener(swiper.wrapperEl)}
                modules={[Pagination]}
            >
                {elements.map((el, index) => (
                    <SwiperSlide className={styles['swiper-slide']} key={index}>
                        <div
                            key={index}
                            className={styles['item']}
                            style={{ backgroundImage: `url(${el.imgUrl})` }}
                        >
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
