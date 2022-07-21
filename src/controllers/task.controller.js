const db = require("../db");

// consulta a db son asíncronas - async / await
const getAllTasks = async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM tasks");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
    const task = response.rows
    if (task.length === 0) return res.status(200).json({ msg: "No se encontró la tarea" });
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    // query, insertar una tarea
    // RETURNING *, retorna todos los campos que han sido insertados
    const response = await db.query(
      "INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.status(200).json(response.rows[0]);
  } catch (error) {
    // enviar error si se duplica un valor de un campo u otro error
    res.status(200).json({ error: error.message });
  }
};

const deleteTask = (req, res) => {
  res.send("delete a task");
};

const updateTask = (req, res) => {
  res.send("update a task");
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
