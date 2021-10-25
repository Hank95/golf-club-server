"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class handicap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "user_id" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  handicap.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      handicap_date: DataTypes.DATE,
      handicap_score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "handicap",
    }
  );
  return handicap;
};
