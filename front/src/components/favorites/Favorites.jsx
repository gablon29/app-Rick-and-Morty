import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action_getCharfavorites } from '../../redux/actionSlice';


const Favorites = () => {
  const characterFavorites = useSelector(state => state.characters.characterFavorites);
  const dispatch = useDispatch();
  const [ stateFav, setStateFav ] = useState()
  useEffect(()  => {
    dispatch(action_getCharfavorites())
    setStateFav(characterFavorites.character)
    console.log(characterFavorites)
  }, [dispatch])
    return (
        <div>
        <h1>Mis favoritos</h1>
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