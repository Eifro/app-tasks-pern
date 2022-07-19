const { Router } = require('express')
const db = require('../db')

const router = Router()

router.get('/tasks', async (req, res) => {
    // consulta a db son asíncronas - async / await
    const response = await db.query('SELECT NOW()')
    console.log(response)
    res.json(response.rows[0].now)
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