'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EpisodeList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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