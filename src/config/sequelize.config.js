const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./config.config');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  logging: false,
  pool: dbConfig.pool,
  timezone: '+05:30' // for writing to database
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

module.exports = sequelize;
