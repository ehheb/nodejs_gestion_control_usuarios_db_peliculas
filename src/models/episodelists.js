'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EpisodeLists extends Model {
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
  EpisodeLists.init({
    seasonNum: DataTypes.INTEGER,
    episodeName: DataTypes.STRING,
    contentId: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
    episodeRating: DataTypes.NUMERIC,
    episodeNum: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    episodeImdbLink: DataTypes.STRING,
    episodeScoreVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EpisodeLists',
  });
  return EpisodeLists;
};