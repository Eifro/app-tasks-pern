const { Router } = require('express')
const { getAllTasks, updateTask, deleteTask, createTask, getTask } = require('../controllers/task.controller')

const router = Router()

router.get('/tasks', getAllTasks)

router.get('/tasks/5', getTask)

router.post('/tasks', createTask)

router.delete('/tasks', deleteTask)

router.put('/tasks', updateTask)

module.exports = router