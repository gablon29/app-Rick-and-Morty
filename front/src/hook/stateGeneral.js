import { action_getallcharacters } from "../redux/actionSlice";
import { useDispatch, useSelector } from "react-redux";

export const stateGeneral = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { characters } = useSelector(state => state.characters);
    dispatch(action_getallcharacters())
    return characters;
}

