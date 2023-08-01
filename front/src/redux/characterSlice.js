import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    characterFavorites: [],
    detail: {},
};

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getallcharacters: (state, action) => {
            state.characters = action.payload
        },
        getCharfavorites: (state, action) => {
            state.characterFavorites = action.payload
        },
    }
});

export const { getallcharacters, getCharfavorites } = characterSlice.actions;
export default characterSlice.reducer