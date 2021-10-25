"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.club, { foreignKey: "club_id" });
    }
  }
  hole.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hole_number: DataTypes.INTEGER,
      tee: DataTypes.STRING,
      par: DataTypes.INTEGER,
      distance: DataTypes.INTEGER,
      score_index: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hole",
    }
  );
  return hole;
};
