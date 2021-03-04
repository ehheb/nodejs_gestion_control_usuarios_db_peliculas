'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {

    static associate(models) {

      this.belongsToMany(models.Contents, {
        through: 'ContentActors',
        foreignKey: 'actorId'
      });
      
    }
  };
  Actors.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actors',
  });
  return Actors;
};