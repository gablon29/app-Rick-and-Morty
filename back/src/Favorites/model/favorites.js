const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorites', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
    });
};