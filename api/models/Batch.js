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
    },
    activeClaimant: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
    },
    image: {
        type: DataTypes.JSON,
          validate: {
            notEmpty: false,
      },
    },
    description: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
    },
    batchLocation: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },

    },
    batchLocationNotes: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
    },
    isSorted: {
        type: DataTypes.BOOLEAN,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
    },
    isClaimed: {
        type: DataTypes.BOOLEAN,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
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