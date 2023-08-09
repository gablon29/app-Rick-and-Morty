import  Card  from "../card/Card"
import './Cards.css'
// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
// import { getFavorites } from "../../redux/actions"

export const Cards = ({ isFav, setIsFav, setActualizado, character, onClose }) => {
    
    return (
        <div className="conteinerCard">
            {
                character.map(({ id, name, species, gender, image}) => {
                    return (
                        <Card isFav={isFav} setIsFav={setIsFav} setActualizado={setActualizado}
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