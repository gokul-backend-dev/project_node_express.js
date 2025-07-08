const { Sequelize } = require('sequelize');
const config = require('../config/config').development;
console.log("🚀 ~ config:", config)

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
    logging: config.logging,
  }
);

sequelize.authenticate()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.error("Unable to connect to DB:", err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./userModel')(sequelize, Sequelize);

module.exports = db;
