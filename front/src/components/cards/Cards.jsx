import  Card  from "../card/Card"
import './Cards.css'
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
// import { getFavorites } from "../../redux/actions"

export const Cards = ({ setActualizado, character, onClose }) => {
    
    return (
        <div className="conteinerCard">
            {
                character.map(({ id, name, species, gender, image}) => {
                    return (
                        <Card
                        setActualizado={setActualizado}
                        key={id}
                        id={id}
                        name={name} species={species} gender={gender}
                        image={image} onClose={onClose}
                        />
                )})
            }
        </div>
    )
}