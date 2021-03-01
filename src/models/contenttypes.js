'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentTypes extends Model {

    static associate(models) {
      
      this.hasMany(models.Contents, {
        foreignKey: "contentTypeId"
      });

      this.hasMany(models.ContentRating, {
        foreignKey: "contentTypeId"
      })
    }
  };
  ContentTypes.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContentTypes',
  });
  return ContentTypes;
};