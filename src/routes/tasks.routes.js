const { Router } = require('express')

const router = Router()

router.get('/tasks', (req, res) => {
    res.send('get tasks list')
})

router.get('/tasks/5', (req, res) => {
    res.send('get a single task')
})

router.post('/tasks', (req, res) => {
    res.send('creating a task')
})

router.delete('/tasks', (req, res) => {
    res.send('delete a task')
})

router.put('/tasks', (req, res) => {
    res.send('update a task')
})

module.exports = router