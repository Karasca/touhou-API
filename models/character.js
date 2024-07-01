'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo(models.Work, {
        as: 'Work'
      });
    }
  }
  Character.init({
    familyName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    familyNameJP: DataTypes.STRING,
    firstNameJP: DataTypes.STRING,
    familyNameR: DataTypes.STRING,
    firstNameR: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character'
  });
  return Character;
};