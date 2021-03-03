'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentActors extends Model {

    static associate(models) {
      
      this.belongsTo(models.Actors, {
        foreignKey: 'actorId'
      });

      this.belongsTo(models.Contents, {
        foreignKey: 'contentId'
      });

    }
  };
  ContentActors.init({
    actorId: DataTypes.INTEGER,
    contentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContentActors',
  });
  return ContentActors;
};