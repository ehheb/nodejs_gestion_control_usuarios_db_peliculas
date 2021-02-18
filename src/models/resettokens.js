'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResetTokens extends Model {

    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'userId'
      });
    };
  };
  ResetTokens.init({
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expirationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ResetTokens',
  });
  return ResetTokens;
};