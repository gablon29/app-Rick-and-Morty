import axios from "axios";

export const deleteFav = async (userId,charId) => {
    await axios.delete(`http://localhost:3001/${userId}/${charId}`)
    .then(res => {
        console.log('Personaje eliminado')})
        .catch(error => console.error(error.message));
};