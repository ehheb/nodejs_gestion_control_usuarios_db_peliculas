'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      //Tiene muchos dentro de la tabla ResetToken
      this.hasMany(models.ResetTokens, {
        foreignKey: 'userId'
      });
      
      //Muchos a muchos a traves de la tabla pivote UserRoles
      this.belongsToMany(models.Roles, {
        through: 'UserRoles',
        foreignKey: 'userId'
      });
    };
  };
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    resetToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};