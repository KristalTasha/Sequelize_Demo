const { DataTypes } = require('sequelize')
const { connect } = require('../connection')

const choir = connect.define('Choir', {
    choir_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateEstablished: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    numberofSingers: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = choir;