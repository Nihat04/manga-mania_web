import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import user from '../../../entities/user/model/userModel';
import { getUser, getWishlist, addToWishlist } from '../../../shared/api';
import { shortManga } from '../../../entities/product';

interface userState {
    user: user | null;
    wishlist: shortManga[] | null;
    logedIn: boolean;
}

let userId = null;

export const addProductToWishlist = createAsyncThunk(
    'user/wishlist/add',
    async (productId: number) => {
        await addToWishlist(Number(productId));
    }
);

const initialState: userState = {
    user: await getUser()
        .then((res) => {
            userId = res?.id;
            return res;
        })
        .catch((err) => (err.message === 'anauthorized user' ? null : null)),
    wishlist: userId ? await getWishlist(userId) : null,
    logedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProductToWishlist.fulfilled, (state): void => {
            if (state && state.user) {
                getWishlist(state.user?.id).then(
                    (res) => (state.wishlist = res)
                );
            }
        });
    },
});

export default userSlice.reducer;
