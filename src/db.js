// npm i pg .- módulo que nos permite conectar con postgres y ejecutar consultas
const { Pool } = require('pg')

// datos de conexión
new Pool ({
    user: 'postgres',
    password: 'qazwsx1999',
    host: 'localhost',
    port: 5432,
    database: 'tasks_db'
})