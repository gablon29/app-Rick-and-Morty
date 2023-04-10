import  Card  from "../card/Card"
import './Cards.css'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getFavorites } from "../../redux/actions"

export const Cards = ({ characters, onClose }) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFavorites())
    }, [])

    return (
        <div className="conteinerCard">
            {
                characters.map(({ id, name, species, gender, image}) => {
                    return (
                        <Card
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