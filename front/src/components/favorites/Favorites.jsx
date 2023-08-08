import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action_getCharfavorites } from '../../redux/actionSlice';


const Favorites = () => {
  const favoritos = useSelector(state => state.characters.characterFavorites);
  const { Characters } = favoritos
  const [ stateFav, setStateFav ] = useState()
  // useEffect(()  => {
  //   setStateFav(Characters)
  //   console.log(Characters)
  // }, [])
  
    return (
        <div>
        <h1>Mis favoritos</h1>
        <h3>{ Characters?.map(char => {
          return (
            <div key={char.id}>
              <h3> {char.name}</h3>
            </div>
          )
        })}</h3>
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