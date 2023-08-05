import axios from 'axios';
import { getCharfavorites, getallcharacters } from './characterSlice';

export const action_getallcharacters = () => (dispatch) => {
    axios.get("http://localhost:3001/characters")
    .then(res => dispatch(getallcharacters(res.data)))
    .catch(err => console.error(err.message))
}; 
export const action_getCharfavorites = () => (dispatch) => {
    axios.get(`http://localhost:3001/favorites/1`)
    .then(res => dispatch(getCharfavorites(res.data)))
    .catch(err => console.error(err.message))
}
