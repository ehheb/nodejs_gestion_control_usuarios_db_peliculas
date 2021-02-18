'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {

    static associate(models) {
      
      this.belongsTo(models.Users, {
        foreignKey: 'userId'
      });

      this.belongsTo(model.Roles, {
        foreignKey: 'roleId'
      });
    }
  };
  UserRoles.init({
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRoles',
  });
  return UserRoles;
};