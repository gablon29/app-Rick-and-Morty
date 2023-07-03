let favorites = require("../utils/favs");

const getFavs = (req, res) => {
    return res.status(200).json(favorites)
}

module.exports = getFavs;