
import { NavLink } from 'react-router-dom';
import './Card.css';
import { useEffect } from 'react';
import { newFavorites } from '../../hook/addFavorites';
import { deleteFav } from '../../hook/deleteFav';
import { verificacion } from '../../hook/verificacion';
import { useSelector } from 'react-redux';
import { selectCharactersFavorites } from '../../hook/Selectores';


const Card = ({ isFav, setIsFav, setActualizado, id, name, species, gender, image, onClose}) => {
    let characterFavorites = useSelector(selectCharactersFavorites);
    
    let arrayFavorites = characterFavorites.Characters;

    useEffect(() => {
        verificacion(id, arrayFavorites, setIsFav)
        }, [characterFavorites]);

    const handleDeleteFavorite = async (e) => {
        e.preventDefault();
        setIsFav(false)
       await deleteFav(id);
       await setActualizado(false)
    }
    const handleAddFavorite = async (e) => {
        e.preventDefault();
        setIsFav(true)
        newFavorites(id)
        await setActualizado(false)
    }
        
    
    
    return (
        <div className='divCards'>
            
            {
            isFav ? (
                <button onClick={handleDeleteFavorite}>❤️</button>
            ) : (
                <button onClick={handleAddFavorite}>🤍</button>
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
export default Card;
// const mapDispatchToProps = (dispatch) => {
    //     return {
        //         removeChar: (id) => dispatch(removeChar(id))
//     }
// }



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