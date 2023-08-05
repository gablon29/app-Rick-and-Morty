const { Characters, Users, Favorites } = require('../../db');

const get_characters = async (charId, userId) => {
    try {
        const user = await Users.findByPk(userId)
        const char = await Characters.findByPk(charId);
         char.addUsers(user)
        return char;
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
        const fav = await Users.findByPk( id, {
            include: [Characters]
        })
        res.status(201).json(fav);
    } catch (error) {
        console.error(error.message)
    }
};

module.exports = {
    getFavorites,
    $character
}