const { Client } = require("pg");
require('dotenv').config();

// Assuming 'medical_pricing' is indeed your database name
let dbName = "medical_pricing";

let db = new Client({
  user: process.env.DB_USER,
  host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,  // Path to the directory containing the socket file
  database: process.env.DB_NAME,
  password:process.env.DB_PASSWORD,  // Database name
});

db.connect(err => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to database:', process.env.DB_NAME);
  }
});

module.exports = db;
