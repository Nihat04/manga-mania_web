import 'swiper/css';
import styles from '../styles/ImageSwiper.module.css';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageSwiper = ({
    elements,
    bg,
}: {
    elements: JSX.Element[];
    bg: string;
}) => {
    const screenWidth = document.body.clientWidth;
    const spaceBetween = 50;
    let bgPosition = 0;
    const bgRef = useRef<HTMLDivElement>(null);

    const updateBg = (translateValue: number) => {
        const itemWidth = 204;

        const padding = (screenWidth - itemWidth) / 2;
        const visibleSide = padding - spaceBetween;

        // const firstPosition = visibleSide - itemWidth * 0 - spaceBetween * -1; // 94.5
        // const secondPosition = visibleSide - itemWidth * 1 - spaceBetween * 0; // -159
        // const thirdPosition = visibleSide - itemWidth * 2 - spaceBetween * 1; // -413.5

        const elementCount = elements.length;

        const start = visibleSide - itemWidth * 0 - spaceBetween * -1;
        const end =
            visibleSide -
            itemWidth * (elementCount - 1) -
            spaceBetween * (elementCount - 2);

        const position = ((translateValue - start) / (end - start)) * 100;

        if (position > 100 || position < 0) return;

        bgRef.current?.animate(
            [
                { backgroundPosition: `${bgPosition}% top` },
                { backgroundPosition: `${position}% top` },
            ],
            {
                duration: 300,
                fill: 'forwards',
            }
        );
        bgPosition = position;
    };

    return (
        <div style={{ position: 'relative' }}>
            <div
                ref={bgRef}
                className={styles['swiper-background']}
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            ></div>
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={'auto'}
                centeredSlides={true}
                className={styles['swiper']}
                onSliderMove={(swiper) => updateBg(swiper.translate)}
                onPaginationUpdate={(swiper) => updateBg(swiper.translate)}
                onUpdate={(swiper) => updateBg(swiper.translate)}
            >
                {elements.map((el, index) => (
                    <SwiperSlide className={styles['swiper-slide']} key={index}>
                        {el}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSwiper;
