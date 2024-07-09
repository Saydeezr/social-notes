const { connect, connection } = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGOURL;

connect(connectionString);

module.exports = connection;