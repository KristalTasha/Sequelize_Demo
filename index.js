const express = require('express');
require('dotenv').config({override: true})
const { connect } = require('./connection');
const choir = require('./models/choirModel');
const chorister = require('./models/choristerModel');
const PORT = 7777;

const app = express()

const testing = async () => {
    try{
        await connect.authenticate();
        console.log('connection to the database successful')
    } catch(error){
        console.log('connection failed ---', error)
    }
}

testing();

const synchronize = async () => {
    try{
        await connect.sync()
        console.log('database synchronization done successfully')
    } catch(error){
        console.log('synchronization failed ----', error)
    }
}

synchronize();


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))