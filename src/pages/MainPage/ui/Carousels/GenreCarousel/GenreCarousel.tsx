import styles from './styles/GenreCarousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carouselFix.css';

import { Carousel } from 'react-responsive-carousel';
import { useRef } from 'react';

import { genre } from '../../../api';

import ProductPanel from '../../../../../shared/ui/ProductPanel/ProductPanel';

const GenreCarousel = ({ genre }: { genre: genre }) => {
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

        const slider = mainRef.current?.querySelector('.slider');
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

        mainRef.current?.animate(
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
            style={{ backgroundImage: `url(${genre.bgImgUrl})` }}
            onLoad={() => applyStyleListener()}
            ref={mainRef}
        >
            <h2 className={styles['header']}>{genre.title.toUpperCase()}</h2>
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
                {genre.products.map((product) => (
                    <div key={product.id} className={styles['product']}>
                        <ProductPanel product={product} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default GenreCarousel;
