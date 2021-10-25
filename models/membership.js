"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsTo(models.club, { foreignKey: "club_id" });
      this.hasMany(models.tee_sheet);
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  membership.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      additional_info: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "membership",
    }
  );
  return membership;
};
