
import { NavLink } from 'react-router-dom';
import './Card.css';
// import { useDispatch, useSelector } from 'react-redux';
// import {  getFavorites } from '../../redux/actions';
// import { useState, useEffect } from 'react';
// import axios from "axios";


const Card = ({id, name, species, gender, image, onClose}) => {

    
//     const [isFav, setIsFav] = useState(false);
//     const dispatch = useDispatch()

//     const favorites = useSelector((state) => state.myFavorites)
//     const addFavorite = (character) => {
//         axios.post("http://localhost:3001/rickandmorty/fav", character)
//             .then(response => console.log(character));
//     };

//     const removeChar = async (id) => {
//         await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
//         dispatch(getFavorites())
//         alert('sory')
//         console.log('removido')
//     };

//     const handleFavorite = () => {
//         if (isFav) {
//             setIsFav(false)
//             removeChar(id)
//         } else {
//             setIsFav(true)
//             addFavorite({ id, name, species, gender, image})
//         }
//     }
//     useEffect(() => {
//    favorites.forEach((fav) => {
//       if (fav.id === id) {
//           setIsFav(true);
//           console.log(fav.id)
//       }
//    })
// }, [favorites])

    return (
        <div className='divCards'>
            
            {/* {
            isFav ? (
                <button onClick={handleFavorite}>❤️</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
            }; */}

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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeChar: (id) => dispatch(removeChar(id))
//     }
// }


    
export default Card;