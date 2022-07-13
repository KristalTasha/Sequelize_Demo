const { DataTypes } = require('sequelize')
const { connect } = require('../connection')

//singer
// firstName, lastName, age, part

const chorister = connect.define('Chorister', {
    chorister_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    part: {
        type: DataTypes.ENUM,
        values: ['Soprano', 'Alto', 'Tenor', 'Bass']
    }
})

module.exports = chorister;