import { Cards } from "../../cards/Cards";
import { Nav } from "../../navbar/Nav";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action_getallcharacters } from '../../../redux/actionSlice';
import { validation } from "../../search/validation";

const Home = () => {
  const { characters } = useSelector(state => state.characters)
  const [character, setCharacters] = useState([])
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(action_getallcharacters())
  }, [dispatch])

  
  const onSearch =  (charac) => {
    const char = validation(charac, characters, character);
    if (char) {
      setCharacters([...character, char])
    } else {
      return character;
    }
  }
    return (
        <div>
        <Nav onSearch={onSearch}/>
        <Cards character={character}/>
        </div>
    )
}

export default Home;