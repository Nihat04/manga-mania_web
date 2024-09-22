import styles from './styles/ProductPanel.module.css';

import favoriteIcon from '../../../shared/assets/svg/favorite.svg';
import { ShortManga } from '../../../entities/manga/model/mangaModel';
import { addProduct } from '../../../store/cart/cartSlice';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api';

const ProductPanel = ({ product }: { product: ShortManga }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({ product: product, quantity: 1 }));
    };

    return (
        <div className={styles['product']}>
            <Link to={`/product/${product.id}`}>
                <img
                    className={styles['img']}
                    src={ BASE_URL + product.imageUrl}
                />
            </Link>
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
