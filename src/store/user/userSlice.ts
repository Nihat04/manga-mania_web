import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import user from '../../entities/user/model/userModel';

interface userState {
    user: user | null;
    logedIn: boolean;
}

const initialState: userState = {
    user: null,
    logedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<user>) => {
            state.user = action.payload;
            state.logedIn = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.logedIn = false;
        },
    },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
