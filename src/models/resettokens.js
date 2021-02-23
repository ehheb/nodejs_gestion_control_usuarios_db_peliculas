'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResetTokens extends Model {

    static associate(models) {
      //Pertenece al id usuario de la tabla Users
      this.belongsTo(models.Users, {
        foreignKey: 'userId'
      });
    };
  };
  ResetTokens.init({
    userId: DataTypes.INTEGER,
    token: DataTypes.UUID,
    expirationDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ResetTokens',
  });
  return ResetTokens;
};