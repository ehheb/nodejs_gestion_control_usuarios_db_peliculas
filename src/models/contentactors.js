'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentActors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ContentActors.init({
    actorId: DataTypes.INTEGER, //foreign key
    contentId: DataTypes.INTEGER //foreing key
  }, {
    sequelize,
    modelName: 'ContentActors',
  });
  return ContentActors;
};