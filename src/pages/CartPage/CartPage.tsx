import styles from './styles/CartPage.module.css';

import Filters from '../../shared/ui/Filters/Filters';
import CartProduct from './ui/CartProduct';

import img1 from '../../../public/img/test/85-0 1.png';

const test = [{ img: img1, name: 'Токийские мстители', price: 700 }];

const CartPage = () => {
    return (
        <main>
            <section className={styles['filters-section']}>
                <Filters title="Корзина" />
            </section>
            <section className={styles['cart-section']}>
                <ul className={styles['cart__list']}>
                    {test.map((el, index) => (
                        <CartProduct key={index} product={el} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CartPage;
