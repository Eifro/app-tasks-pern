import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

export default function TaskForm() {
  const [input, setInput] = useState({
    title: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)
  const params = useParams();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        "Content-Type": 'application/json'
      }
    })
    const data = await response.json()
    setLoading(false)
    navigate('/')
    console.log(data)
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }} style={{backgroundColor: '#1e272e', padding: '1rem'}}>
          <Typography variant="5" text-align="center" color='white'>CREAR NUEVA TAREA</Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Título"
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{style: {color: "white"}}}
                InputLabelProps={{style: {color: "white"}}}
                name='title'
                onChange={handleChange}
              />
              <TextField
                variant="filled"
                label="Descripción"
                multiline
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{style: {color: "white"}}}
                InputLabelProps={{style: {color: "white"}}}
                name='description'
                onChange={handleChange}
              />
              <Button variant="contained" color="success" type='submit' disabled={!input.title || !input.description}>
                {loading ? <CircularProgress size={24} color='inherit' /> : 'GUARDAR'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
