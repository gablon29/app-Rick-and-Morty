import { Cards } from "../../cards/Cards";
import { Nav } from "../../navbar/Nav";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action_getCharfavorites, action_getallcharacters } from '../../../redux/actionSlice';
import { validation } from "../../search/validation";
import { stateGeneral } from "../../../hook/stateGeneral";

const Home = () => {
  const { characters } = useSelector(state => state.characters)
  const {Characters} = useSelector(state => state.characters?.characterFavorites)
  const [character, setCharacters] = useState([])
  const dispatch = useDispatch()
  
  console.log(characters)
  
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
        <Cards character={character} onClose={onClose}/>
        </div>
    )
}

export default Home;