// express .- es un framework popular de node, que permite crear un servidor de manera simple
const express = require('express')

// morgan .- lista las peticiones que se van haciendo por la consola (get, post, put, delete)
const morgan = require('morgan')

// cors .- es un módulo que permite comunicar 2 servidores en diferentes dominios
// npm i nodemon -D .- paquete que se usa en el desarrollo de la app, 

const tasksRoutes = require('./routes/tasks.routes')

const app = express()

app.use(morgan('dev'))

// usa json para los post y get
app.use(express.json())

app.use(tasksRoutes)

app.listen(3000)
console.log('% server listening 3000')