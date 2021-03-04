'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {

    static associate(models) {

      this.belongsToMany(models.Actors, {
        through: 'ContentActors',
        foreignKey: 'contentId'
      });

      this.belongsToMany(models.Directors, {
        through: 'ContentDirectors',
        foreignKey: 'contentId'
      });

      this.belongsToMany(models.Genres, {
        through: 'ContentGenres',
        foreignKey: 'contentId'
      });

      this.belongsTo(models.ContentRatings, {
        foreignKey: 'contentRatingId'
      });

      this.belongsTo(models.ContentTypes, {
        foreignKey: 'contentTypeId'
      });

      this.hasMany(models.EpisodeList, {
        foreignKey: 'contentId'
      });


    }
  };
  Contents.init({
/*     contentRatingId: DataTypes.INTEGER,
    contentTypeId: DataTypes.INTEGER, */
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    totalSeasons: DataTypes.INTEGER,
    imdbScore: DataTypes.NUMERIC,
    releaseDates: DataTypes.STRING,
    playTime: DataTypes.STRING,
    totalEpisodes: DataTypes.INTEGER,
    imdbLink: DataTypes.STRING,
    imdbScoreVotes: DataTypes.INTEGER,
    ratingDetails: DataTypes.JSON,
    languajes: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};