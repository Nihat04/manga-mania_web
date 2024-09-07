import styles from '../styles/CartProduct.module.css';

import classNames from 'classnames';

const CartProduct = (props) => {
    const { product } = props;

    return (
        <li className={styles['product']}>
            <div className={styles['info']}>
                <div className={styles['product__left']}>
                    <img
                        className={styles['product__img']}
                        src={product.img}
                        alt=""
                    />
                </div>
                <div className={styles['product__right']}>
                    <p className={styles['product__name']}>{product.name}</p>
                    <p className={styles['product__price']}>
                        {product.price + '₽'}
                    </p>
                </div>
            </div>
            <div className={styles['product__btns']}>
                <button
                    className={classNames(styles['btn'], styles['btn__cart'])}
                >
                    Купить
                </button>
                <div className={classNames(styles['btn'])}>
                    <button className={styles['btn__count']}>-</button>
                    <span className={styles['btn__count']}>1</span>
                    <button className={styles['btn__count']}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartProduct;
