import { createSelector } from "@reduxjs/toolkit";

export const selectCharacter = state => state.characters.characters;
export const selectCharactersFavorites = state => state.characters.characterFavorites;
