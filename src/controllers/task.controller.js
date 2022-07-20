const db = require('../db')

// consulta a db son asíncronas - async / await
const getAllTasks = async (req, res) => {
    res.send('get a tasks list')
}

const getTask = async (req, res) => {
    res.send('get a single task')
}

const createTask = async (req, res) => {
    const { title, description } = req.body
    
    // query, insertar una tarea
    // RETURNING *, retorna todos los campos que han sido insertados
    const response = await db.query("INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *", [title, description])

    console.log(response)

    res.send('creating a task')
}

const deleteTask = (req, res) => {
    res.send('delete a task')
}

const updateTask = (req, res) => {
    res.send('update a task')
}

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask }