// Require the dotenv module to load environment variables
require('dotenv').config();
// Require the Sequelize module
const Sequelize = require('sequelize');
// Creat a new instance of Sequelize and connect to the database using the 
//JAWSDB_URL environment variable
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  // Export the sequelize instance for use in other modules
module.exports = sequelize;
