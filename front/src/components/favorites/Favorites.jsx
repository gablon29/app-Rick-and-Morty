import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import './Favorites.css'

const Favorites = () => {
    
    const favorites = useSelector((state) => state.myFavorites)
    
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