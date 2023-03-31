import { useState } from "react"

export const SearchBar = ({onSearch}) => {
    
    const [character, setCharacter] = useState('');

    const handleChange = (evento) => {
        const value = evento.target.value
        setCharacter(value)
    }

    return (
        <div>
            <input type='search' onChange={handleChange} />
            
            <button onClick={() => onSearch(character)}>Agregar</button>
        </div>
    )
}