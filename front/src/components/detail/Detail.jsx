import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
      <div>
          {character.name ? (
              <>
          <h3>{character.name}</h3>
          
          <h3>{character.status}</h3>

          <h3>{character.specie}</h3>

          <h3>{character.gender}</h3>

          <h3>{character.origin?.name}</h3>

          <img src={character.image} alt='imagen'/>
              </>
          )
          : 
           (   <h2>
                  Loading...
              </h2>
          )}
    </div>
  )
}

export default Detail

// Name
// Status
// Specie
// Gender
// Origin
// Image

