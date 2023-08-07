import React from 'react'


const Favorites = () => {
    return (
        <div>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
        <h1>hola mundo</h1>
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