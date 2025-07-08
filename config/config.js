// config.js
module.exports = {
  development: {
    username: "postgres",
    password: "My9629314035",
    database: "postgres",
    host: "backenddb.cxygeouuure9.ap-south-1.rds.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
};
