'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EpisodeList extends Model {

    static associate(models) {
      
      this.belongsTo(models.Contents, {
        foreignKey: "contentId"
      });
      
    }
  };
  EpisodeList.init({
    contentId: DataTypes.INTEGER, //foreign key
    seasonNum: DataTypes.INTEGER,
    episodeName: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    episodeRating: DataTypes.NUMERIC,
    episodeNum: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    episodeImdbLink: DataTypes.STRING,
    episodeScoreVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EpisodeList',
  });
  return EpisodeList;
};