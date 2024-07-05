require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

const { MongoClient } = require('mongodb');
const url = process.env.MONGOURL;
const client = new MongoClient(url);

let db;

app.use(routes);


const init = async () => {
    try{
        await client.connect()
        db = client.db('bootcamp');
        app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
    } catch(err) {
        console.error(err)
    }
}

init();

