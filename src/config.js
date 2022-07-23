// npm i dotenv - módulo que permite crear un archivo .env (variables de entorno)
const { config } = require("dotenv");
config();

module.exports = {
  config: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
};
