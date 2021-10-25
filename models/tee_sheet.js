"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tee_sheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.membership, { foreignKey: "member_id" });
      this.belongsTo(models.club, { foreignKey: "club_id" });
    }
  }
  tee_sheet.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      club_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "tee_sheet",
    }
  );
  return tee_sheet;
};
