
import { NavLink } from 'react-router-dom';
import './Card.css';
import { connect, useDispatch } from 'react-redux';
import {  getFavorites, removeChar } from '../../redux/actions';
import { useState, useEffect } from 'react';
import axios from "axios";


const Card = ({ id, name, species, gender, image, onClose, myFavorites }) => {
    
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch()

    const addFavorite = (character) => {
        axios.post("http://localhost:3001/rickandmorty/fav", character)
            .then(response => console.log("ok"));
    };

    const removeChar = async (id) => {
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        dispatch(getFavorites())
        alert('Eliminado')
    };

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false)
            removeChar(id)
        } else {
            setIsFav(true)
            addFavorite({ id, name, species, gender, image})
        }
    }
    useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites])

    return (
        <div className='divCards'>
            
            {
            isFav ? (
                <button onClick={handleFavorite}>❤️</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
            };

            <button onClick={() => onClose(id)}>X</button>
            <NavLink className='navLink' to={`/detail/${id}`}>
                <h2 className='cardh2'>{name}</h2>
            </NavLink>
            <img src={image} alt="imagen" />.
            
            <h2 className='cardh2'>{species}</h2>

            <h2 className='cardh2' >{gender}</h2>
            
            
        </div>
    )

    
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeChar: (id) => dispatch(removeChar(id))
    }
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
} 
    
export default connect(mapStateToProps, mapDispatchToProps)(Card);