const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorites', {
        id: {
        type: DataTypes.UUID,
        primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Users',
                Key: 'id'
            }
        },
        characterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Characters',
                Key: 'id'
            }
        }
    }) 
}