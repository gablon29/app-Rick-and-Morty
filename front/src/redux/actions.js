// Aqui creamos los actions que luego se tomara las reducer para saber lo que debe hacer

export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHAR = 'REMOVE_CHAR';

/**
 * generamos el valor de las variantes que devolveran un obj
 * con una prop "type" que tendra la accion y una prop "payload" 
 * donde el valor es un dato que servira para el reducer especificar 
 * con que valor queremos que trabaje
 */
export const addCharacter = (character) => {
    return { type: ADD_CHARACTER, payload: character}
}

export const removeChar = (id) => {
    return {type: REMOVE_CHAR, payload: id}
}