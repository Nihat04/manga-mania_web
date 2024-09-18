import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchState {
    history: string[];
}

const initialState: searchState = {
    history: [],
};

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchHistory: (state, action: PayloadAction<string>) => {

        },
    },
});

export const { addSearchHistory } = SearchSlice.actions;

export default SearchSlice.reducer;
