import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function TaskForm() {
  const params = useParams();
  console.log(params);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}>
          <Typography>CREAR NUEVA TAREA</Typography>
          <CardContent>
            <form action="">
              <TextField
                variant="filled"
                label="Título"
                sx={{ display: "block", margin: ".5rem 0" }}
              />
              <TextField
                variant="filled"
                label="Descripción"
                multiline
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
              />
              <Button variant="contained" color="success" type='submit'>
                GUARDAR
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
