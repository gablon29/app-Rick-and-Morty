import axios from 'axios';
import { getCharById, getallcharacters } from './characterSlice';

export const action_getallcharacters = () => (dispatch) => {
    axios.get("http://localhost:3001/characters")
    .then(res => dispatch(getallcharacters(res.data)))
    .catch(err => console.error(err.message))
}; 
export const action_getCharById = (character) => (dispatch) => {
    axios.get(`http://localhost:3001/characters/${character}`)
    .then(res => dispatch(getCharById(res.data)))
    .catch(err => console.error(err.message))
}