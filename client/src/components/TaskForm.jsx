import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TaskForm() {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (editing) {
      await fetch(`http://localhost:3001/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await fetch("http://localhost:3001/tasks", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    setLoading(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const loadTask = async (id) => {
    const response = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await response.json();
    setInput({
      title: data.title,
      description: data.description,
    });
    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="5" text-align="center" color="white">
            {params.id ? "EDITAR TAREA" : "CREAR NUEVA TAREA"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Título"
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="title"
                onChange={handleChange}
                value={input.title}
              />
              <TextField
                variant="filled"
                label="Descripción"
                multiline
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="description"
                onChange={handleChange}
                value={input.description}
              />
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={!input.title || !input.description}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  params.id ? "EDITAR" : "GUARDAR"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
