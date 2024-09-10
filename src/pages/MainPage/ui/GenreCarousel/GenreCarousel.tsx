import styles from './styles/GenreCarousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carouselFix.css';

import { Carousel } from 'react-responsive-carousel';
import ProductPanel from '../../../../shared/ui/ProductPanel/ProductPanel';
import { useRef } from 'react';

const GenreCarousel = ({
    title,
    bgImage,
    products,
}: {
    title: string;
    bgImage: string;
    products: any;
}) => {
    const mainRef = useRef(null);
    let bgPosition = 0;

    const applyStyleListener = () => {
        const observer = new MutationObserver((mutationList) => {
            const transformValue = mutationList[0].target.style.transform;
            const moveValue: string = transformValue
                .split(',')[0]
                .split('(')[1]
                .replace('%', '');
            const moveValueNumber = -Number(moveValue);
            updatePosition(moveValueNumber);
        });

        const slider = mainRef.current.querySelector('.slider');
        observer.observe(slider, {
            attributes: true,
            attributeFilter: ['style'],
        });
    };

    const updatePosition = (position: number) => {
        if (position > 100) {
            position = 100;
        } else if (!position || position < 0) {
            position = 0;
        }

        bgPosition = position;

        mainRef?.current.animate(
            [
                { backgroundPosition: `${bgPosition}% top` },
                { backgroundPosition: `${position}% top` },
            ],
            {
                duration: 500,
                fill: 'forwards',
            }
        );
    };

    return (
        <div
            className={styles['carousel--wrapper']}
            style={{ backgroundImage: `url(${bgImage})` }}
            onLoad={() => applyStyleListener()}
            ref={mainRef}
        >
            <h2 className={styles['header']}>{title.toUpperCase()}</h2>
            <Carousel
                autoPlay={false}
                infiniteLoop={false}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                centerMode={true}
                centerSlidePercentage={70}
                showIndicators={false}
            >
                {products.map((el, index) => (
                    <div key={index} className={styles['product']}>
                        <ProductPanel key={index} product={el} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default GenreCarousel;
