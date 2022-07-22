const db = require("../db");

// consulta a db son asíncronas - async / await
const getAllTasks = async (req, res, next) => {
  try {
    const response = await db.query("SELECT * FROM tasks");
    res.status(200).json(response.rows);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await db.query("SELECT * FROM tasks WHERE id = $1", [id]);
    const task = response.rows;
    if (task.length === 0) throw new Error("No se encontró la tarea");
    res.status(200).json(response.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
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
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await db.query(
      "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
    );
    if (!response.rowCount)
      throw new Error("No se encontró la tarea a eliminar");
    res.status(200).json(response.rows[0]);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const response = await db.query(
      "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    if (!response.rowCount)
      throw new Error("No se encontró la tarea a actualizar");
    res.status(200).json(response.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks, getTask, createTask, deleteTask, updateTask };
