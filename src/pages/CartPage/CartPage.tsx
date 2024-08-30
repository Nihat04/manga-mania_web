import styles from './styles/CartPage.module.css';

import Filters from '../../shared/ui/Filters/Filters';

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
                    {test.map((el) => (
                        <li>
                            <div className="">
                                <img src={el.img} alt="" />
                            </div>
                            <div className="">
                                <p>{el.name}</p>
                                <p>{el.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CartPage;
