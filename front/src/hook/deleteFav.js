import axios from "axios";

export const deleteFav = (charId) => {
    axios.delete(`http://localhost:3001/1/${charId}`)
    .then(res => {
        console.log('Personaje eliminado')})
        .catch(error => console.error(error.message));
};