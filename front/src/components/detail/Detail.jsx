import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css';


const Detail = () => {
    const {detailId} = useParams()
    const [character, setCharacter] = useState({})
    
    useEffect(() => {
  fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);

  return (
      <>
          {character.name ? (
              <div className='divDetail'>
          <h3>{character.name}</h3>
          
          <h3>{character.status}</h3>

          <h3>{character.species}</h3>

          <h3>{character.gender}</h3>

          <h3>{character.origin?.name}</h3>

          <img src={character.image} alt='imagen'/>
              </div>
          )
          : 
           (   <h2>
                  Loading...
              </h2>
          )}
    </>
  )
}

export default Detail

// Name
// Status
// Specie
// Gender
// Origin
// Image

