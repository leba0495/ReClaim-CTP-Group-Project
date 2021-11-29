'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
        unique: false,
      },
      lastName: {
          type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
        },
      },
      password: {
          type: DataTypes.STRING,
            validate: {
              len: [8, 20],
              notEmpty: true,
        },
        unique: true,
      },
      phoneNumber: {
          type: DataTypes.INTEGER,
            validate: {
              len: [10],
              notEmpty: true,
        },
        unique: true,
      },
      email: {
          type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
        },
        unique: true,
      },
      streetAddress: {
          type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
        },
        unique: true,
      },
      city: {
          type: DataTypes.STRING,
            validate: {
              len: [3, 250],
              notEmpty: true,
        },
      },
      zipCode: {
          type: DataTypes.INTEGER,
            validate: {
              len: [5],
              notEmpty: true,
        },
      },
      updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};