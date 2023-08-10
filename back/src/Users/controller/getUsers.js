const { Users } = require('../../db');

async function $get_record_users() {
    try {
        const users = await Users.findAll();
        console.log(users)
        return users[0];
    } catch (error) {
        console.error('error en la operacion', error.message)
    };
};

const paintRecordUsers = async (req, res) => {
    try {
        const usersData = await $get_record_users();
        res.status(201).json(usersData);
    } catch (error) {
        console.error(error.messsage);
    };
};

module.exports = {
    paintRecordUsers
}