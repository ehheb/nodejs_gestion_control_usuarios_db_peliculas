'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentDirectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ContentDirectors.init({
    directorId: DataTypes.INTEGER, //foreign key
    contentId: DataTypes.INTEGER //foreign key
  }, {
    sequelize,
    modelName: 'ContentDirectors',
  });
  return ContentDirectors;
};