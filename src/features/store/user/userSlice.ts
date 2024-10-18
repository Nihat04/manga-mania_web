import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getUser,
    getWishlist,
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

let userId = null;

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
    user: await getUser()
        .then((res) => {
            userId = res?.id;
            return res;
        })
        .catch((err) => (err.message === 'unauthorized user' ? null : null)),
    wishlist: userId ? await getWishlist(userId) : null,
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
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

export default userSlice.reducer;
