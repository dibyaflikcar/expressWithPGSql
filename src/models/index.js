const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Customer Model
db.user = require('./user.model')(sequelize, Sequelize);


// db.dealerVehicle.hasMany(db.testDrive, { foreignKey: 'vehicle_id', targetKey: 'id', foreignKeyConstraint: true });
// db.testDrive.belongsTo(db.dealerVehicle, { foreignKey: 'vehicle_id', targetKey: 'id', foreignKeyConstraint: true });
// Dealer RelationShip


module.exports = db;
