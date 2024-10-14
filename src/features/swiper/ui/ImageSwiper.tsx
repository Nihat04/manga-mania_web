import 'swiper/css';
import styles from '../styles/ImageSwiper.module.css';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const ImageSwiper = ({
    elements,
    bg,
    title,
}: {
    elements: JSX.Element[];
    bg: string;
    title?: string;
}) => {
    const screenWidth = document.body.clientWidth;
    const spaceBetween = 50;
    const bgRef = useRef<HTMLDivElement>(null);

    const updateBg = (translateValue: number) => {
        const itemWidth = 204;

        const padding = (screenWidth - itemWidth) / 2;
        const visibleSide = padding - spaceBetween;

        const elementCount = elements.length;

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
        <div
            className={styles['image-swiper']}
            ref={bgRef}
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {title && (
                <h2 className={styles['header']}>{title.toUpperCase()}</h2>
            )}
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={'auto'}
                centeredSlides={true}
                className={styles['swiper']}
                onSwiper={(swiper) => applyStyleListener(swiper.wrapperEl)}
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
