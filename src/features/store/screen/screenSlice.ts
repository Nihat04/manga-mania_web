import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { notification } from '../../notifications';

interface screenState {
    notifications: notification[];
    modal: JSX.Element | null;
}

const initialState: screenState = {
    notifications: [],
    modal: null,
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
        addModal: (state, action: PayloadAction<JSX.Element>) => {
            if (state.modal) throw new Error('modal alredy taken');

            state.modal = action.payload;
        },
    },
});

export const { addNotification, removeNotification, addModal } =
    ScreenSlice.actions;

export default ScreenSlice.reducer;
