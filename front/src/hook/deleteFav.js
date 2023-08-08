import axios from "axios";

export const deleteFav = async (charId) => {
    await axios.delete(`http://localhost:3001/1/${charId}`)
    .then(res => { console.log('Personaje eliminado', res.data)})
        .catch(error => console.error(error.message));
};