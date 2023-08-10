const { Users } = require('../../db');


async function createUsers(newUsers) {
    const user = Users.create(newUsers);
    return user;
}

const createRecord = async (req, res) => {
    try {
        const { name, password } = req.body;
        const users = await createUsers({
            username: name,
            password: password
        });

        res.status(201).json(users);
    } catch (error) {
        console.error('error en la operacion',error.message)
    };
};

module.exports = {
    createRecord
}