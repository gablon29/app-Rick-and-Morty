import { ADD_CHARACTER, FILTER, GET_FAVORITES, ORDER, REMOVE_CHAR } from "./actions"

const initialState = {
    myFavorites: [],
    // allCharacter: []
}

const rootReducer = (state = initialState, actions) => { 
    switch (actions.type) {
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: actions.payload,
            };
        case REMOVE_CHAR:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== actions.payload)
            };
        // case FILTER:
        //     const { myFavorites } = state.myFavorites;
        //     return {
        //         ...state,
        //         myFavorites: myFavorites.filter(char => char.gender === actions.payload)
        //     };
        // case ORDER:
        //     const { id } = state.allCharacter;
        //     let result = [];
        //     if ("Ascendente") {
        //         result = state.allCharacter.sort((a, b) => a - b)
        //     } else {
        //         result = state.allCharacter.sort((a, b) => b - a)
        //     }
        //     return {
        //         ...state,
        //         myFavorites: result
        //     }


        default: return {...state}
    }
}

export default rootReducer;