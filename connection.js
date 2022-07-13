const { Sequelize } = require('sequelize')

module.exports.connect = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql'
    //how sequelize logs to the console
    // logging: (...msg) => console.log(msg)
})

