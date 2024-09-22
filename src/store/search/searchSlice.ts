import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    addElement,
    deleteAll,
    deleteElement,
    get,
} from './model/searchLocalStorageHandler';
import searchElement from './model/searchModel';

interface searchState {
    history: searchElement[];
}

const initialState: searchState = {
    history: get(),
};

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchHistory: (state, action: PayloadAction<searchElement>) => {
            addElement(action.payload);
            state.history = get();
        },
        deleteSearchHistoryElement: (state, action: PayloadAction<number>) => {
            deleteElement(action.payload);
            state.history = get();
        },
        deleteSearchHistory: (state) => {
            deleteAll();
            state.history = get();
        },
    },
});

export const {
    addSearchHistory,
    deleteSearchHistoryElement,
    deleteSearchHistory,
} = SearchSlice.actions;

export default SearchSlice.reducer;
