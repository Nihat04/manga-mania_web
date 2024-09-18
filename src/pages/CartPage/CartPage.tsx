import styles from './styles/CartPage.module.css';

import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import Filters from '../../shared/ui/Filters/Filters';
import CartProduct from './ui/CartProduct';

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);

    return (
        <main>
            <section className={styles['filters-section']}>
                <Filters title="Корзина" />
            </section>
            <section className={styles['cart-section']}>
                <ul className={styles['cart__list']}>
                    {cart.map((el, index) => (
                        <CartProduct key={index} cartProduct={el} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CartPage;
