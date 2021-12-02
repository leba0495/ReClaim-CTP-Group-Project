'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
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
            len: [7, 20],
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
    },
    city: {
        type: DataTypes.STRING,
    },
    zipCode: {
        type: DataTypes.INTEGER,
    },
    }, {
    sequelize,
    modelName: 'User'
  });

  // console.log(User === sequelize.models.User);

  User.associate = (models) => {

    //associations can be defined here
    models.User.hasMany(models.Batch, {as: 'Author', foreignKey: 'authorId'});
    models.User.hasMany(models.Batch, {as: 'Claimant', foreignKey: 'claimantId'});
    //through AuthorBatch

    //through ClaimantBatch

  };

  return User;
};