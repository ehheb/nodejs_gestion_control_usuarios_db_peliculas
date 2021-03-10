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

      this.hasMany(models.EpisodeLists, {
        foreignKey: 'contentId'
      });


    }
  };
  Contents.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    totalSeasons: DataTypes.INTEGER,
    imdbScore: DataTypes.NUMERIC,
    releaseDates: DataTypes.STRING,
    playTime: DataTypes.STRING,
    contentRatingId: DataTypes.INTEGER,
    totalEpisodes: DataTypes.INTEGER,
    contentTypeId: DataTypes.INTEGER,
    imdbLink: DataTypes.STRING,
    imdbScoreVotes: DataTypes.INTEGER,
    ratingDetails: DataTypes.JSON,
    languages: DataTypes.ARRAY(DataTypes.TEXT)
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};