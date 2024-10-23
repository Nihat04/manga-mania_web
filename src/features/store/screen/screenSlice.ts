import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { notification } from '../../notifications';

interface screenState {
    notifications: notification[];
}

const initialState: screenState = {
    notifications: [],
};

const ScreenSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addNotification: (state, action: PayloadAction<notification>) => {
            state.notifications.unshift(action.payload);
        },
        removeNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter(
                (notification) => notification.id !== action.payload
            );
        },
    },
});

export const { addNotification, removeNotification } = ScreenSlice.actions;

export default ScreenSlice.reducer;
