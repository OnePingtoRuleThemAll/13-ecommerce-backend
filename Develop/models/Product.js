// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns for product table
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // Disalow NULL values
      prinmaryKey: true, // Set as the primary key
      autoInrement: true, // Automatically increment the value for each new record
    },
    product_name: {
      type: DataTypes.STRING, // set data type to string
      allowNULL: false, //disallow NULL values
    },
    price: {
      type: DataTyps.DECIMAL, // set the data types to DECIMAL
      allowNull:  false, // disallow null
      validate: {
        isDecimal: true, // validate that the value is a decimal number 
      },
    },
    stock: {
      type: DataTypes.INTEGER, // set data type to integer
      allowNull: false, // disallow null values
      defaultValue: 10, // set default value to 10
      validate: {
        isNumeric: true, // validate that the value is a numeric value
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // set data type to integer
      references: {
        model: "category", // reference the 'category' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
