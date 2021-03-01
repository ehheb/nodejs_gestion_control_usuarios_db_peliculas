'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contents.init({
    contentRating: DataTypes.INTEGER, //foreign key
    contentType: DataTypes.INTEGER, //foreign key
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    totalSeasons: DataTypes.INTEGER,
    imdbScore: DataTypes.NUMERIC,
    releaseDates: DataTypes.STRING,
    playTime: DataTypes.STRING,
    totalEpisodes: DataTypes.INTEGER,
    imdbLink: DataTypes.STRING,
    lastUpdate: DataTypes.DATE,
    imdbScoreVotes: DataTypes.INTEGER,
    ratingDetails: DataTypes.JSON,
    languages: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};