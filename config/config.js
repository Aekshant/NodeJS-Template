require("dotenv").config();

const { DATABASE_PASSWORD, DATABASE, PORT } = process.env
module.exports = {
  "dev": {
    "username": "root",
    "password": DATABASE_PASSWORD,
    "database": DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "PORT" : PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
