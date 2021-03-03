'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentRatings extends Model {

    static associate(models) {

      this.hasMany(models.Contents, {
        foreignKey: 'contentRatingId'
      });

      this.belongsTo(models.ContentTypes, {
        foreignKey: 'contentTypeId'
      });

    }
  };
  ContentRatings.init({
    contentTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ContentRatings',
  });
  return ContentRatings;
};