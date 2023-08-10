import { useState } from "react"

export const SearchBar = ({onSearch}) => {
   // ejecutamos la funcion que viene por props

    const [character, setCharacter] = useState('');

    const handleChange = (evento) => {
        const value = evento.target.value
        setCharacter(value) // send the string that contein the number
    }

    return (
        <div>
            <input type='search' onChange={handleChange} />
            
            <button onClick={() => onSearch(character)}>Agregar</button>
        </div>
    )
}
