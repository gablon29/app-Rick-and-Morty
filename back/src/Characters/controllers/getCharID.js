const { Characters } = require('../../db');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const char = await Characters.findAll({
            where: {
                id: id
            }
        });
        res.status(201).send(char);
    } catch (error) {
        console.error(error.message)
    };
};

module.exports = {
    getCharById
}