import styles from './styles/ProductPanel.module.css';

import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from 'react-redux';

import { addProduct } from '../../../../store/cart/cartSlice';
import favoriteIcon from '../../../../shared/assets/svg/favorite.svg';
import manga, {
    convertToShort,
} from '../../../../entities/manga/model/mangaModel';
import { BASE_URL } from '../../../../shared/api';

const ProductPanel = ({ product }: { product: manga }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({ product: convertToShort(product), quantity: 1 }));
    };

    return (
        <div className={styles['product']}>
            <Carousel
                showIndicators={product.imageUrls.length > 1}
                showThumbs={false}
            >
                {product.imageUrls.map((img, index) => (
                    <img
                        key={index}
                        className={styles['img']}
                        src={BASE_URL + img}
                    />
                ))}
            </Carousel>
            <button
                className={styles['favorite-btn']}
                onClick={() => console.log(product.imageUrls)}
            >
                <img className={styles['icon']} src={favoriteIcon} />
            </button>
            <p className={styles['name']}>{product.name}</p>
            <div className={styles['bottom']}>
                <p className={styles['price']}>{product.price + '₽'}</p>
                <button
                    onClick={() => addToCart()}
                    className={styles['buy-btn']}
                >
                    Купить
                </button>
            </div>
        </div>
    );
};

export default ProductPanel;
