import { Cards } from "../../cards/Cards";
import { Nav } from "../../navbar/Nav";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCharacter } from '../../../hook/Selectores';
import { validation } from "../../search/validation";


const Home = ({isFav, setIsFav, setActualizado }) => {
  const [ character, setCharacters ] = useState([])
  const characters = useSelector(selectCharacter);
  
  
  const onSearch =  (charac) => {
    const char = validation(charac, characters, character);
    if (char) {
      setCharacters([...character, char])
    } else {
      return character;
    }
  }
  const onClose = (id) => {
    const deleteChar = character.filter(char => char.id !== Number(id))
    console.log(id)
    setCharacters(deleteChar)
  }
  return (
      <div>
      <Nav onSearch={onSearch}/>
      <Cards isFav={isFav} setIsFav={setIsFav} setActualizado={setActualizado} character={character} onClose={onClose}/>
      </div>
  )
  }

export default Home;