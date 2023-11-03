/* eslint-disable linebreak-style */
require('dotenv').config();



module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 100,
    acquire: 30000,
    idle: 10000
  }
};
