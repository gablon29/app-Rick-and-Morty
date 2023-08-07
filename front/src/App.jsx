import './App.css';
import Home from './components/views/home/Home';
import { Routes, Route } from "react-router-dom";
import { RootErrorBoundary } from './routes';
import Favorites from '../src/components/favorites/Favorites'

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='favorites' element={<Favorites/>}/>
          {/* renderizado para rutas incorrectas */}
          <Route path='*' element={ <RootErrorBoundary/> }/>
      </Routes>
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