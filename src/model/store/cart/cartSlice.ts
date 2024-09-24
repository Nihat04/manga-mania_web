import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import cartProduct from './model/cartModels';
import { getCart, saveToCart } from './model/cartLocalStorageHandler';

function initialCart(): cartProduct[] {
    try {
        return getCart();
    } catch {
        return [];
    }
}

interface cartState {
    cart: cartProduct[];
}

const initialState: cartState = {
    cart: initialCart(),
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<cartProduct>) => {
            const productInCart = state.cart.find(
                (cartProduct) =>
                    cartProduct.product.id === action.payload.product.id
            );

            if (productInCart) {
                productInCart.quantity++;
                return;
            }

            state.cart.push(action.payload);
            saveToCart(state.cart);
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                (cartProduct) => cartProduct.product.id !== action.payload
            );
            saveToCart(state.cart);
        },
        updateProduct: (state, action: PayloadAction<cartProduct>) => {
            const product = state.cart.find(
                (cartProduct) =>
                    cartProduct.product.id === action.payload.product.id
            );

            if (!product) return;

            if (action.payload.quantity <= 0) {
                state.cart = state.cart.filter(
                    (CartProduct) =>
                        CartProduct.product.id !== action.payload.product.id
                );
            } else {
                product.quantity = action.payload.quantity;
            }
            saveToCart(state.cart);
        },
    },
});

export const { addProduct, deleteProduct, updateProduct } = CartSlice.actions;

export default CartSlice.reducer;
