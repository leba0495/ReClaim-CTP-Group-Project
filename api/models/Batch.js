'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Batch extends Model {}

  Batch.init({
    image: {
        type: DataTypes.STRING,
    },
    title:{
      type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
    },
    location: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
            notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 100],
        notEmpty: true,
      }
    },
    locationNotes: {
        type: DataTypes.STRING,
          validate: {
            len: [3, 250],
      },
    },
    isSorted: {
        type: DataTypes.BOOLEAN,
    },
    isClaimed: {
        type: DataTypes.BOOLEAN,
          validate: {
            notEmpty: true,
      },
    },
    completedAt: {
      type: DataTypes.DATE,
    }
    }, {
    sequelize,
    modelName: 'Batch'
  });

  console.log(Batch === sequelize.models.Batch);

  Batch.associate = (models) => {
    //associations can be defined here

    models.Batch.belongsTo(models.User, {foreignKey: 'authorId'});
    models.Batch.belongsTo(models.User, {foreignKey: 'claimantId'});
  };

  return Batch;
};