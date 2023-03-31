import  Card  from "../card/Card"
import './Cards.css'

export const Cards = ({ characters, onClose }) => {
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