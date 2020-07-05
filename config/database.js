const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_HOST = process.env.DB_HOST;
const DB_ENGINE = process.env.DB_ENGINE;

module.exports = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: DB_ENGINE || 'mssql',
    pool: {
        max: 1,
        min: 0,
        idle: 1000
      }
}