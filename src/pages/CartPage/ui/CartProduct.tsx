import 'swiper/css';
import styles from '../styles/CartProduct.module.css';

import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import cartProduct from '../../../features/store/cart/model/cartModels';
import { API_URL } from '../../../shared/config';
import {
    deleteProduct,
    updateProduct,
} from '../../../features/store/cart/cartSlice';

import deleteIcon from '../../../shared/assets/svg/trashIcon.svg';
import { AppDispatch } from '../../../features/store/store';
import { WishlistButton } from '../../../shared/ui';

const CartProduct = ({ cartProduct }: { cartProduct: cartProduct }) => {
    const dispatch = useDispatch<AppDispatch>();

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
        <div className={styles['product']}>
            <Swiper slidesPerView={'auto'}>
                <SwiperSlide>
                    <Link to={`/product/${cartProduct.product.id}`}>
                        <div className={styles['info']}>
                            <div className={styles['product__left']}>
                                <img
                                    className={styles['product__img']}
                                    src={
                                        API_URL +
                                        cartProduct.product.imageUrls[0]
                                    }
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
                    </Link>
                    <div className={styles['product__btns']}>
                        <button
                            className={classNames(
                                styles['btn'],
                                styles['btn__cart'],
                                'btn-da'
                            )}
                            onClick={() => console.log(cartProduct)}
                        >
                            Купить
                        </button>
                        <div className={classNames(styles['counter'])}>
                            <button
                                onClick={() => changeProductQuantity('-')}
                                className={classNames(
                                    styles['counter__btn'],
                                    'btn-da'
                                )}
                            >
                                -
                            </button>
                            <span className={styles['counter__number']}>
                                {cartProduct.quantity}
                            </span>
                            <button
                                onClick={() => changeProductQuantity('+')}
                                className={classNames(
                                    styles['counter__btn'],
                                    'btn-da'
                                )}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles['actions-panel']}>
                    <div className={styles['actions']}>
                        <div
                            className={styles['action']}
                            style={{ backgroundColor: '#DEDEDE' }}
                        >
                            <div className={styles['wishlist-btn']}>
                                <WishlistButton
                                    productId={cartProduct.product.id}
                                />
                            </div>
                        </div>
                        <div
                            className={styles['action']}
                            style={{ backgroundColor: '#D0D0D0' }}
                        >
                            <button
                                className={styles['action-btn']}
                                onClick={() => deleteProductFromCart()}
                            >
                                <img
                                    className={styles['icon']}
                                    src={deleteIcon}
                                />
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CartProduct;
