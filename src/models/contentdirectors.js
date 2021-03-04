'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentDirectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.Directors, {
        foreignKey: 'directorId'
      });
      
      this.belongsTo(models.Contents, {
        foreignKey: 'contentId'
      });

    }
  };
  ContentDirectors.init({
    directorId: DataTypes.INTEGER,
  /*   contentId: DataTypes.INTEGER */
  }, {
    sequelize,
    modelName: 'ContentDirectors',
  });
  return ContentDirectors;
};