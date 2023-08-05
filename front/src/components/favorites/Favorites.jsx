import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Favorites = () => {
    
    const { characterFavorites } = useSelector(state => state.characterFavorites); 
    const [ favorites, setFavorites ] = useState([]);
    const dispatch = useDispatch();

    return (
        <div className='divFavorites'>
          {
              favorites.map(({ id, name, species, gender, image }) => {
                  return (
                      <Card
                          key={id}
                          id={id}
                          name={name} species={species} gender={gender}
                          image={image}
                      />
                  )
              })
          }
    </div>
  )
}

export default Favorites

// import { useSelector } from 'react-redux'
// import Card from '../card/Card'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './Favorites.css'
// import { getFavorites, orderCards } from '../../redux/actions'
// const favorites = useSelector((state) => state.myFavorites)
// const dispatch = useDispatch()
// useEffect(() => {
//     dispatch(getFavorites())
// }, [])

// const orderCharac = (evento) => {
//     dispatch(orderCards(evento.target.value))
//     console.log(evento.target.value)
// }

// const filterCards = (evento) => {
//     dispatch(filterCards(evento.target.value))
//     console.log(evento.target.value)
// }