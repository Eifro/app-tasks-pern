// npm i pg .- módulo que nos permite conectar con postgres y ejecutar consultas
const { Pool } = require("pg");
const { config } = require("./config");

// datos de conexión
// devuelve un objeto con el que podemos hacer consultas
const db = new Pool({
  user: config.user,
  password: config.password,
  host: config.host,
  port: config.port,
  database: config.name,
});

module.exports = db;
