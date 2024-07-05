require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const { MongoClient } = require('mongodb');
const url = process.env.MONGOURL;
const client = new MongoClient(url);

const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
