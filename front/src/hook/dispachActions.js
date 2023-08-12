import { action_getCharfavorites, action_getallcharacters } from "../redux/actionSlice";
import { dispatchCharacters } from "./Selectores";

const dispatch = dispatchCharacters();

export const dispatchAllCharacters = async () => {
    await dispatch(action_getallcharacters());
};
export const dispatchFavoritesCharacters = async () => {
    await dispatch(action_getCharfavorites());
};