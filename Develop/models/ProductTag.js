const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // set the data type to integer
      allowNull: false, // disallow null values
      primaryKey: true, // sets as the primary key
      autoIncrement: true, // automatically increment the value for each new record
    },
    tag_id: {
      type: DataTypes.INTEGER, // set type to integer
      references: {
        model: "tag", // references the 'tag' table
        key: "id", // reference the 'id' column in the 'tag' table      
      },
    },
    product_id: {
      type: DataTypes.INTEGER, // set the data type to INTEGER
      references: {
        model: "product", // reerences the 'product' table
        key: "id", // reference the 'id' column in the 'product' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
