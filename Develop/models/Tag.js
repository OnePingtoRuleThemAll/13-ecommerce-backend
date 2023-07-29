const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // set data type to integer
      allowNull: false, // disallow null values
      primaryKey: true, //set ast the primary key
      autoIncrement: true, // automatically increment the value for each new record
    },
    tag_name: {
      type: DatatTypes.STRING, // set data type to string
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
