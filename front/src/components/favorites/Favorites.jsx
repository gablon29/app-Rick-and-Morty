import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import  Card  from "../card/Card"
import { selectCharactersFavorites } from '../../hook/Selectores'
import './Favorites.css'
import { Nav } from '../navbar/Nav'


const Favorites = ({ isFav, setIsFav, setActualizado }) => {
  const characterFavorites = useSelector(selectCharactersFavorites);
  const { Characters } = characterFavorites;
  const genders =  Array.from(new Set(Characters.map(char => char.gender)))
  const [ gender, setGender ] = useState("");
  const match = gender ? Characters.filter(char => {
    if (char.gender !== gender) return false

    return true;
  }) : Characters;
  
    return (
      <>
        <Nav/>
        <h1 className='text-central'>Mis favoritos</h1>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Todos</option>
          {
            genders.map(gender => 
              (
                <option key={gender} value={gender}>{gender}</option>
              )
            )
          }
        </select>
      <div className='conteinerFavorites'>
        <div className="conteinerCard">
        { 
          match.map(({ id, name, species, gender, image }) => {
                    return (
                        <Card  
                        isFav={isFav} 
                        setIsFav={setIsFav} 
                        setActualizado={setActualizado}
                        key={id}
                        id={id}
                        name={name} species={species} gender={gender}
                        image={image}
                        />
        )})}
        </div>
    </div>
    </>
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