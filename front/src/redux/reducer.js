/**
 * importamos las action para trabajar con ellas generar un "switch" donde ellas seran los 
 * casos
 */
import { ADD_CHARACTER, GET_FAVORITES, REMOVE_CHAR } from "./actions"
/**
 * creamos el state inicial para trabajar con ello
 */
const initialState = {
    myFavorites: [] 
}
/** 
 * creamos el "reducer" que siempre lo tenemos como rootRender
 * es la unica funcion que puede modificar mi estado por que es la unica 
 * que esta suscripta
 * Tambien generamos el switch para que tomando las variables que vienen de la importacion
 * del action retorne el estado modificado
 * 
 */
const rootReducer = (state = initialState, actions) => { 
    switch (actions.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.myFavorites, actions.payload]
            };
        case REMOVE_CHAR:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== actions.payload)
            };
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: actions.payload
            };


        default: return {...state}
    }
}

export default rootReducer;