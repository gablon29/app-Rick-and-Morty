const { Favorites } = require('../../db');

const deleteFavoriteFromUser = async (userId, charId) => {
    try {
        const favorites = await Favorites.findOne({
            where: {
            userId: userId,
            characterId: charId
        }})
        await favorites.destroy();
        console.log('Personaje favorito eliminado con exito')
    } catch (error) {
        console.error(error.message)
    }
};

const ordenDeEliminarFavoritos = async (req, res) => {
    try {
        const { userId, characterId } = req.params;
        await deleteFavoriteFromUser(userId, characterId)
        res.status(200).send('eliminado con exito')
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = {
    ordenDeEliminarFavoritos
}