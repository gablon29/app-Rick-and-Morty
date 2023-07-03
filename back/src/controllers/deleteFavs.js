let favorites = require("../utils/favs");

const deleteFavs = (req, res) => {
    const { id } = req.params;
    favorites.filter(char => char.id !== id);
    return res.status(200).json("Eliminado")
}

module.exports = deleteFavs