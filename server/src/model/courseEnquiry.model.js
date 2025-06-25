const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db/connectPostgres");

class CourseEnquiry extends Model {}

CourseEnquiry.init(
  {
    fullName: {
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
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "CourseEnquiry",
    tableName: "CourseEnquiries",
    timestamps: true,
  }
);

module.exports = CourseEnquiry;
