'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {

    static associate(models) {

      //tiene muchos 
      this.hasMany(models.EpisodeList, {
        foreignKey: "contentId"
      });

      //muchos a muchos
      this.belongsToMany(models.Actors, {
        through: "ContentActors",
        foreignKey: "contentId"
      });

      //muchos a muchos
      this.belongsToMany(models.Directors, {
        through: "ContentDirectors",
        foreignKey: "contentId"
      });

      //muchos a muchos
      this.belongsToMany(models.Genres, {
        through: "ContentGenres",
        foreignKey: "contentId"
      });

      //pertenece a
      this.belongsTo(models.ContentRating, {
        foreignKey: "contentRatingId"
      });

      //pertenece a
      this.belongsTo(models.ContentTypes, {
        foreignKey: "contentTypeId"
      });

    }
  };
  Contents.init({
    contentRatingId: DataTypes.INTEGER, //foreign key
    contentTypeId: DataTypes.INTEGER, //foreign key
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    totalSeasons: DataTypes.INTEGER,
    imdbScore: DataTypes.NUMERIC,
    releaseDates: DataTypes.STRING,
    playTime: DataTypes.STRING,
    totalEpisodes: DataTypes.INTEGER,
    imdbLink: DataTypes.STRING,
    imdbScoreVotes: DataTypes.INTEGER,
    ratingDetails: DataTypes.JSON,
    languages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};