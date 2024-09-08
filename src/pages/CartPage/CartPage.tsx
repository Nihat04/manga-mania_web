import styles from './styles/CartPage.module.css';

import { useEffect, useState } from 'react';

import { getCart } from './api/cartApi';

import Filters from '../../shared/ui/Filters/Filters';
import CartProduct from './ui/CartProduct';

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart().then((res) => setCart(res));
    }, []);

    return (
        <main>
            <section className={styles['filters-section']}>
                <Filters title="Корзина" />
            </section>
            <section className={styles['cart-section']}>
                <ul className={styles['cart__list']}>
                    {cart.map((el, index) => (
                        <CartProduct key={index} product={el} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CartPage;
