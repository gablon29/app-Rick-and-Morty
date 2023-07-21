import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    detail: {},
};

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getallcharacters: (state, action) => {
            state.characters = action.payload
        }
    }
});

export const { getallcharacters } = characterSlice.actions;
export default characterSlice.reducer