import React from 'react'
// import { useSelector } from 'react-redux'
// import Card from '../card/Card'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './Favorites.css'
// import { getFavorites, orderCards } from '../../redux/actions'

const Favorites = () => {
    
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
    
  return (
      <div className='divFavorites'>
          {/* {
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
          } */}
    </div>
  )
}

export default Favorites