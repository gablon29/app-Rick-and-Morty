import axios from 'axios';
import { getallcharacters } from './characterSlice';

export const action_getallcharacters = () => (dispatch) => {
    axios.get("http://localhost:3001/characters")
    .then(res => dispatch(getallcharacters(res.data)))
    .catch(err => console.error(err.message))
}; 