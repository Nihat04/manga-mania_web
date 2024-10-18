import styles from './styles/CartPage.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../features/store/store';
import { PageHeader } from '../../shared/ui';
import { placeOrder } from '../../entities/product';

import CartProduct from './ui/CartProduct';
import { createNotification } from '../../features/notifications';
import classNames from 'classnames';

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();

    const orderPlace = () => {
        if (user === null) throw new Error('user not authorized');

        placeOrder({ cartProducts: cart, user })
            .then((res) => (window.location.href = res.paymentUrl))
            .catch((err) =>
                createNotification({
                    header: 'Ошибка создания заказа',
                    bodyText: err.message,
                })(dispatch)
            );
    };

    return (
        <main>
            <section className={styles['header-section']}>
                <PageHeader>Корзина</PageHeader>
            </section>
            <section className={styles['cart-section']}>
                <ul className={styles['cart__list']}>
                    {cart.map((el, index) => (
                        <CartProduct key={index} cartProduct={el} />
                    ))}
                </ul>
            </section>
            <section className={styles['order-place']}>
                <div className={styles['order-place__btns']}>
                    <button
                        className={classNames(
                            styles['order-place__btn'],
                            'btn-da'
                        )}
                        onClick={orderPlace}
                    >
                        Оформить заказ
                    </button>
                </div>
            </section>
        </main>
    );
};

export default CartPage;
