import { useDispatch } from 'react-redux';
import cartProduct from '../../../store/cart/model/cartModels';
import styles from '../styles/CartProduct.module.css';

import classNames from 'classnames';
import { deleteProduct, updateProduct } from '../../../store/cart/cartSlice';
import { BASE_URL } from '../../../shared/api';

const CartProduct = ({ cartProduct }: { cartProduct: cartProduct }) => {
    const dispatch = useDispatch();

    const deleteProductFromCart = () => {
        dispatch(deleteProduct(cartProduct.product.id));
    };

    const changeProductQuantity = (operation: '+' | '-') => {
        const newQuantity =
            operation === '+'
                ? cartProduct.quantity + 1
                : cartProduct.quantity - 1;

        dispatch(
            updateProduct({
                product: cartProduct.product,
                quantity: newQuantity,
            })
        );
    };

    return (
        <li className={styles['product']}>
            <div className={styles['info']}>
                <div className={styles['product__left']}>
                    <img
                        className={styles['product__img']}
                        src={BASE_URL + cartProduct.product.imageUrl}
                        alt=""
                    />
                </div>
                <div className={styles['product__right']}>
                    <p className={styles['product__name']}>
                        {cartProduct.product.name}
                    </p>
                    <p className={styles['product__price']}>
                        {cartProduct.product.price + '₽'}
                    </p>
                </div>
            </div>
            <div className={styles['product__btns']}>
                <button
                    className={classNames(styles['btn'], styles['btn__cart'])}
                    onClick={() => console.log(cartProduct)}
                >
                    Купить
                </button>
                <div className={classNames(styles['counter'])}>
                    <button
                        onClick={() => changeProductQuantity('-')}
                        className={styles['counter__btn']}
                    >
                        -
                    </button>
                    <span className={styles['counter__number']}>
                        {cartProduct.quantity}
                    </span>
                    <button
                        onClick={() => changeProductQuantity('+')}
                        className={styles['counter__btn']}
                    >
                        +
                    </button>
                </div>
            </div>
        </li>
    );
};

export default CartProduct;
