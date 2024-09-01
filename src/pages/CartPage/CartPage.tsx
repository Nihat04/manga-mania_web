import styles from './styles/CartPage.module.css';

import Filters from '../../shared/ui/Filters/Filters';

import img1 from '../../../public/img/test/85-0 1.png';
import classNames from 'classnames';

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
                        <li className={styles['cart__item']}>
                            <div className={styles['cart__item__info']}>
                                <div className={styles['item__left']}>
                                    <img
                                        className={styles['item__img']}
                                        src={el.img}
                                        alt=""
                                    />
                                </div>
                                <div className={styles['item__rigth']}>
                                    <p>{el.name}</p>
                                    <p>{el.price}</p>
                                </div>
                            </div>
                            <div className={styles['cart__item__btns']}>
                                <button
                                    className={classNames(
                                        styles['btn'],
                                        styles['btn__cart']
                                    )}
                                >
                                    Купить
                                </button>
                                <div className={classNames(styles['btn'])}>
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default CartPage;
