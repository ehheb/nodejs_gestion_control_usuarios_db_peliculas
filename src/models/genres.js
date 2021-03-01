'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {

    static associate(models) {
      
      this.belongsToMany(models.Contents, {
        through: "ContentGenres",
        foreignKey: "genreId"
      })
    }
  };
  Genres.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genres',
  });
  return Genres;
};