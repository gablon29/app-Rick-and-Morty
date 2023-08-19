import { action_getCharfavorites, action_getallcharacters } from "../redux/actionSlice";
import { dispatchCharacters } from "./Selectores";

const dispatch = dispatchCharacters();

export const dispatchAllCharacters = () => {
    dispatch(action_getallcharacters());
};
export const dispatchFavoritesCharacters =  () => {
    dispatch(action_getCharfavorites());
};