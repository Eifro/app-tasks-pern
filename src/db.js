// npm i pg .- módulo que nos permite conectar con postgres y ejecutar consultas
const { Pool } = require('pg')

// datos de conexión
// devuelve un objeto con el que podemos hacer consultas
const db = new Pool ({
    user: 'postgres',
    password: 'migue19',
    host: 'localhost',
    port: 5432,
    database: 'tasks_db'
})

module.exports = db