let favoritos = require("../utils/favs")

const createFav = (req, res) => {
    const { id, name, gender, specie } = req.body;
    favoritos.push({id, name, gender, specie })
    return res.status(200).json("Agregado con Exito")
}
module.exports = createFav;
