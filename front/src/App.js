import './App.css';
import { Cards } from './components/cards/Cards';
import { Nav } from './components/navbar/Nav';
import { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';



function App() {
  const navigate = useNavigate()
  const [access, setAccess] = useState(false);

  const username = 'gabriellondero@gmail.com'
  const password = 'Gabriel29'

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate('/home')
    }
  }

  const [characters, setCharacters] = useState([]);
  
  const onSearch = (character) => { 
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data])
      }
      else {
        window.alert('que miras bobo')
      }
    })
  };
  
  const onClose = (id) => {
    setCharacters(characters.filter((Character) => Character.id !== id))
  }
  
  const { pathname } = useLocation();
  useEffect(() => {
    !access && navigate('/');
  }, [access])
  
  return (
    <div className="App">
      { pathname !== '/' && <Nav onSearch= {onSearch}/>}
      <Routes>
        <Route path='/' element={<Form login={login} />}/>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    
    </div>
  );
}


export default App;
