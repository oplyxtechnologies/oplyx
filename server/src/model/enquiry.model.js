const { Model, DataTypes, UUIDV4 } = require("sequelize");
const { sequelize } = require("../config/db/connectPostgres");
class Enquiry extends Model {}

Enquiry.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    service: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: "Enquiry",
    tableName: "Enquiries",
    timestamps: true,
  }
);

module.exports = Enquiry;
