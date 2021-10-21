'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hole.init({
    club_id: DataTypes.INTEGER,
    hole_number: DataTypes.INTEGER,
    tee: DataTypes.STRING,
    par: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    score_index: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hole',
  });
  return hole;
};