import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action_getallcharacters } from './redux/actionSlice';
import { Cards } from './components/cards/Cards';
import { Nav } from './components/navbar/Nav';
import { validation } from './components/search/validation';


function App() {
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
    <div className="App">
    <Nav onSearch= {onSearch}/>
    <Cards character={character} />
    </div>
  );
}


export default App;

// import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
// import About from './components/about/About';
// import Detail from './components/detail/Detail';
// import Form from './components/form/Form';
// import Favorites from './components/favorites/Favorites'
// mejorar la interfaz grafica para el mejor rendimiento de la aplicacion.
// const navigate = useNavigate()
  // const [access, setAccess] = useState(false);

  // const username = 'gabriellondero@gmail.com'
  // const password = 'G'

  // const login = (userData) => {
  //   if (userData.username === username && userData.password === password) {
  //     setAccess(true)
  //     navigate('/home')
  //   }
  // }

  // const [characters, setCharacters] = useState([]);
  
  // const onSearch = (character) => { 

  //   if (characters.find((char) => char.id === Number(character))) {
  //     return alert('Personaje repetido')
  //   }

  //   fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.name) {
  //       setCharacters((oldChars) => [...oldChars, data])
  //     }
  //     else {
  //       window.alert('que miras bobo')
  //     }
  //   })
  // };
  
  // const onClose = (id) => {
  //   setCharacters(characters.filter((Character) => Character.id !== id))
  // }
  
  // const { pathname } = useLocation();