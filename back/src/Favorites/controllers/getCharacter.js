const { Characters, Users, Favorites } = require('../../db');

const get_characters = async (charId, userId) => {
    try {
        const user = await Users.findAll({
            where: {
                id: userId,
            }
        })
        const char = await Characters.findAll({
            where: {
                id: charId,
            }
        });
        await Favorites.create({
            userId: userId,
            characterId: charId
        })
        const fav = await Favorites.findAll({
            where: {
                userId: userId
            }
        });
        return fav;
    } catch (error) {
        console.error(error.message);
    }
};

const $character = async (req, res) => {
    try {
        const { charId, userId } = req.body;
        const char = await get_characters(charId, userId);
        res.status(201).send(char);
    } catch (error) {
        console.error(error.message)
    }
};

const getFavorites = async (req, res) => {
    try {
        const { id } = req.params;
        const fav = await Favorites.findAll({
           where: { 
            userId: id
           }
        })
        res.status(201).send(fav);
    } catch (error) {
        console.error(error.message)
    }
};

module.exports = {
    getFavorites,
    $character
}