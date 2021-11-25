'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Batch extends Model {}

  Batch.init({
    objectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
      unique: true,
    },
    activeClaimant: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
      unique: true,
    },
    image: {
        type: DataTypes.JSON,
          validate: {
            notEmpty: false,
      },
      unique: false,
    },
    description: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
      unique: false,
    },
    batchLocation: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
      unique: false,
    },
    batchLocationNotes: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
      unique: false,
    },
    isSorted: {
        type: DataTypes.BOOLEAN,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
      unique: false,
    },
    isClaimed: {
        type: DataTypes.BOOLEAN,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
      unique: false,
    },
    }, {
    sequelize,
    modelName: 'Batch'
  });

  console.log(Batch === sequelize.models.Batch);

  //Batch.associate = (models) => {
    // associations can be defined here


   // models.Batch.belongsToOne(models.blank, {through: ''});
  //};

  return Batch;
};