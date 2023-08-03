import axios from "axios";

export const deleteFav = (charId) => {
    const dataSend = {
        user: 1,
        character: charId
    }

    axios.delete('http://localhost:3001/characters', dataSend)
    .then(res => {
        console.log('Personaje eliminado', res.data)})
        .catch(error => console.error(error.message));
};