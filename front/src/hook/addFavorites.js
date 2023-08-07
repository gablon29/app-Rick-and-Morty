import axios from 'axios';

export const newFavorites = (character) => {
    const dataSend = {
        user: 1,
        character: character
    }
    axios.post('http://localhost:3001/characters', dataSend)
    .then(res => {
        console.log('Peticion resalizada con exito',res.data)})
        .catch(err => console.error(err.message))
}