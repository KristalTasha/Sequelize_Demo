const { Sequelize } = require('sequelize')

const connect = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql'
})

module.exports = connect