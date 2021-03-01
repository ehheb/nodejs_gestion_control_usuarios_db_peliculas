'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directors extends Model {

    static associate(models) {
      
      this.belongsToMany(models.Contents, {
        through: "ContentDirectors",
        foreignKey: "directorId"
      });
    }
  };
  Directors.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Directors',
  });
  return Directors;
};