// backend/db/dbConfig.js
const pgp = require("pg-promise")();
require("dotenv").config();

const { PG_HOST, PG_USER, PG_PORT, PG_DATABASE } = process.env;

const cn = {
  host: PG_HOST,
  user: PG_USER,
  port: PG_PORT,
  database: PG_DATABASE,
  allowExitOnIdle: true,
};

const db = pgp(cn);

module.exports = db;
