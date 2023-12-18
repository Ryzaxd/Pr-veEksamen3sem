'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Webapplikation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Webapplikation.init({
    titel: DataTypes.STRING,
    forfatter: DataTypes.STRING,
    forlag: DataTypes.STRING,
    udgave: DataTypes.INTEGER,
    pris: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Webapplikation',
  });
  return Webapplikation;
};