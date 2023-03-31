
import { NavLink } from 'react-router-dom';
import './Card.css';
import { connect } from 'react-redux';
import { addCharacter, removeChar } from '../../redux/actions';
import { useState, useEffect } from 'react';


const Card = ({ id, name, species, gender, image, onClose, addCharacter, removeChar, myFavorites}) => {
    
    const [isFav, setIsFav] = useState(false);

    const handleFavorite = () => {
        if (isFav) {
            setIsFav(false)
            removeChar(id)
        } else {
            setIsFav(true)
            addCharacter({ id, name, species, gender, image })
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
        addCharacter: (character) => dispatch(addCharacter(character)),
        removeChar: (id) => dispatch(removeChar(id))
    }
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
} 
    
export default connect(mapStateToProps, mapDispatchToProps)(Card);