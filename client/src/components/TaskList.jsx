import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  const loadTasks = async () => {
    const response = await fetch("http://localhost:3001/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "DELETE",
    });
    // filtro de state array tasks
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Lista de Tareas</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          style={{ marginBottom: ".7rem", backgroundColor: "#1e272e" }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button variant="contained" color="warning" onClick={() => navigate(`/task/edit/${task.id}`)}>
                Editar
              </Button>
              <Button
                variant="contained"
                color="error"
                style={{ marginLeft: "1.5rem" }}
                onClick={() => handleDelete(task.id)}
              >
                Borrar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
