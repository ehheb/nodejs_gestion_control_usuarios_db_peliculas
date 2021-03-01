'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentRating extends Model {

    static associate(models) {
      
      this.belongsTo(models.ContentTypes, {
        foreignKey: "contentTypeId"
      });
      
    }
  };
  ContentRating.init({
    contentTypeId: DataTypes.INTEGER, //foreign key
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentRating',
  });
  return ContentRating;
};