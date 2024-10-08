import styles from '../styles/index.module.css';

import { useDispatch } from 'react-redux';

import { addProduct } from '../../../../model/store/cart/cartSlice';
import { shortManga } from '../../../../entities/product';

export const BuyButton = ({ product }: { product: shortManga }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addProduct({ product: product, quantity: 1 }));
    };
    return (
        <button onClick={() => addToCart()} className={styles['buy-btn']}>
            Купить
        </button>
    );
};
