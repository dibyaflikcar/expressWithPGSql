/* eslint-disable linebreak-style */
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      'User',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        username: {
          type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
          },
        password: {
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
        tableName: 'user',
        timestamps: true
      }
    );
    return User;
  };
  
  