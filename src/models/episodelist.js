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
      this.belongsTo(models.Contents, {
        foreignKey: 'contentId'
      });
    }
  };
  EpisodeList.init({
  /*   contentId: DataTypes.INTEGER, */
    seasonNum: DataTypes.INTEGER,
    episodeName: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    episodeRating: DataTypes.NUMERIC,
    episodeNum: DataTypes.INTEGER,
    descritpion: DataTypes.TEXT,
    episodeImdbLink: DataTypes.STRING,
    episodeScoreVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EpisodeList',
  });
  return EpisodeList;
};