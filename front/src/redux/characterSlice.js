import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    characterSelect: [],
    detail: {},
};

export const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        getallcharacters: (state, action) => {
            state.characters = action.payload
        },
        getCharById: (state, action) => {
            state.characterSelect = action.payload
        },
    }
});

export const { getallcharacters, getCharById } = characterSlice.actions;
export default characterSlice.reducer