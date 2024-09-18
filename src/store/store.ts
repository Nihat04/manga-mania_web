import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './user/userSlice.ts';
import CartReduced from './cart/cartSlice.ts';
import SearchReducer from './search/searchSlice.ts';

export const store = configureStore({
    reducer: {
        user: UserReducer,
        cart: CartReduced,
        search: SearchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
