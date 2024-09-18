import styles from './styles/ProductPanel.module.css';

import favoriteIcon from '../../../shared/assets/svg/favorite.svg';
import manga from '../../../entities/manga/model/mangaModel';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/cart/cartSlice';

const ProductPanel = ({ product }: { product: manga }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({ product: product, quantity: 1 }));
    };

    return (
        <div className={styles['product']}>
            <img className={styles['img']} src={product.imgUrl} />
            <button className={styles['favorite-btn']}>
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
