// Aqui creamos los actions que luego se tomara las reducer para saber lo que debe hacer
import axios from "axios";
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHAR = 'REMOVE_CHAR';
export const GET_FAVORITES = 'GET_FAVORITES';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const FILTER = 'FILTER'; // filtrado de cards
export const ORDER = 'ORDER';

/**
 * generamos el valor de las variantes que devolveran un obj
 * con una prop "type" que tendra la accion y una prop "payload" 
 * donde el valor es un dato que servira para el reducer especificar 
 * con que valor queremos que trabaje
 */
// export const addCharacter = (character) => {
//     return { type: ADD_CHARACTER, payload: character}
// }

export const removeChar = (id) => {
    return {type: REMOVE_CHAR, payload: id}
}

export const getFavorites = () => {
  return async function(dispatch) {
        const URL = "http://localhost:3001/rickandmorty";
        const response = await axios.get(`${URL}/fav`);
      dispatch({ type: GET_FAVORITES, payload: response.data })
      console.log(response.data)
    }
}

export const removeFavorites = (id) => {
        return { type: REMOVE_FAVORITES, payload: id };
}
    
export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id };
}