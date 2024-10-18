import styles from '../styles/index.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../../../../features/store/cart/cartSlice';
import { shortManga } from '../../../../entities/product';
import { RootState } from '../../../../features/store/store';

import cart from '../../../../shared/assets/svg/cart.svg';
import cartFilled from '../../../../shared/assets/svg/cart-filled.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

type state = {
    label: string;
    icon: string;
};

const ADD_TO_CART: state = {
    label: 'Купить',
    icon: cart,
};

const IN_CART: state = {
    label: 'В корзине',
    icon: cartFilled,
};

export const BuyButton = ({
    product,
    className = '',
}: {
    product: shortManga;
    className?: string;
}) => {
    const [cartState, setCartState] = useState<state>(ADD_TO_CART);
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToCart = () => {
        if (cartState.label === 'Купить') {
            dispatch(addProduct({ product: product, quantity: 1 }));
        } else if (cartState.label === 'В корзине') {
            navigate('/cart');
        }
    };

    useEffect(() => {
        if (cart.find((prod) => prod.product.id === product.id)) {
            setCartState(IN_CART);
        }
    }, [cart, product]);

    return (
        <button
            onClick={() => addToCart()}
            className={classNames(styles['buy-btn'], className, 'btn-da')}
            style={{ backgroundImage: `url(${cartState.icon})` }}
        >
            {cartState.label}
        </button>
    );
};
