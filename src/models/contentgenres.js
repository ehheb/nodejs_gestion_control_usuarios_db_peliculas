'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentGenres extends Model {

    static associate(models) {
      
      this.belongsTo(models.Genres, {
        foreignKey: 'genreId'
      });

      this.belongsTo(models.Contents, {
        foreignKey: 'contentId'
      });

    }
  };
  ContentGenres.init({
    genreId: DataTypes.INTEGER,
/*     contentId: DataTypes.INTEGER */
  }, {
    sequelize,
    modelName: 'ContentGenres',
  });
  return ContentGenres;
};