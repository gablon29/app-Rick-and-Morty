import axios from "axios";

export const deleteFav = (userId,charId) => {
    const dataSend = {
        user: userId,
        character: charId,
    }

    axios.delete('http://localhost:3001/characters', dataSend)
    .then(res => {
        console.log('Personaje eliminado', dataSend)})
        .catch(error => console.error(error.message));
};