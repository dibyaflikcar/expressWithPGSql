/* eslint-disable linebreak-style */
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      'User',
      {
        ec_user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        first_name: {
          type: Sequelize.STRING
        },
        full_name: {
          type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
          },
        phone_number:{
          field: 'phone_number',
          type: Sequelize.STRING
        },
        ec_password: {
          type: Sequelize.STRING
        },
        createdAt: {
          field: 'created_at',
          type: Sequelize.DATE
        },
        updatedAt: {
          field: 'updated_at',
          type: Sequelize.DATE
        }
      },
      {
        tableName: 'ec_users',
        timestamps: true
      }
    );
    return User;
  };
  
  