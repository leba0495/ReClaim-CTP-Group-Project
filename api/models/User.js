'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
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
      unique: true,
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
      unique: true,
    },
    zipCode: {
        type: DataTypes.INTEGER,
          validate: {
            len: [5],
            notEmpty: true,
      },
      unique: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    }, {
    sequelize,
    modelName: 'User'
  });

  // console.log(User === sequelize.models.User);

  //User.associate = (models) => {
    // associations can be defined here


   // models.User.belongsToOne(models.blank, {through: ''});
  //};

  return User;
};