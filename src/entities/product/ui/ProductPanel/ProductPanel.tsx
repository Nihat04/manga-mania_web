import styles from './styles/ProductPanel.module.css';

import favoriteIcon from '../../../../shared/assets/svg/favorite.svg';
import { shortManga } from '../../model';
import { addProduct } from '../../../../model/store/cart/cartSlice';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../../shared/config';

const ProductPanel = ({ product }: { product: shortManga }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({ product: product, quantity: 1 }));
    };

    return (
        <div className={styles['product']}>
            <Link to={`/product/${product.id}`}>
                <img
                    className={styles['img']}
                    src={API_URL + product.imageUrl}
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
