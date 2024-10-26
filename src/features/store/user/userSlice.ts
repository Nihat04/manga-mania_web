import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
    addToWishlist,
    deleteFromWishlist,
    user,
} from '../../../entities/user';
import { convertToShort, shortManga } from '../../../entities/product';

interface userState {
    user: user | null;
    wishlist: shortManga[] | null;
    loggedIn: boolean;
}

export const addProductToWishlist = createAsyncThunk(
    'user/wishlist/add',
    async (productId: number): Promise<shortManga> => {
        const addedProduct = await addToWishlist(Number(productId));
        return convertToShort(addedProduct);
    }
);

export const deleteProductFromWishlist = createAsyncThunk(
    'user/wishlist/delete',
    async (productId: number): Promise<number | null> => {
        const response = await deleteFromWishlist(Number(productId));
        if (response.status === 200) return productId;
        return null;
    }
);

const initialState: userState = {
    user: null,
    wishlist: null,
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<user>) => {
            state.user = action.payload;
        },
        addWishlist: (state, action: PayloadAction<shortManga[]>) => {
            state.wishlist = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            addProductToWishlist.fulfilled,
            (state, action): void => {
                state.wishlist?.push(action.payload);
            }
        );
        builder.addCase(
            deleteProductFromWishlist.fulfilled,
            (state, action): void => {
                if (action.payload && state.wishlist) {
                    state.wishlist = state.wishlist.filter(
                        (product) => product.id !== action.payload
                    );
                }
            }
        );
    },
});

export const { addUser, addWishlist } = userSlice.actions;

export default userSlice.reducer;
