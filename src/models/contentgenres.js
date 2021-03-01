'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentGenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ContentGenres.init({
    genreId: DataTypes.INTEGER, //foreign key
    contentId: DataTypes.INTEGER //foreign key
  }, {
    sequelize,
    modelName: 'ContentGenres',
  });
  return ContentGenres;
};