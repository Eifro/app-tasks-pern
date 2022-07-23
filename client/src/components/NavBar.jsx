import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()

  return (
    // recuadro - navegación - centrado - opciones - tipografía
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{flexGrow: 1}}>
              <Link to="/" style={{textDecoration: 'none', color: '#eee'}}>
                PERN STACK
              </Link>
            </Typography>
            <Button variant="contained" color="secondary" onClick={() => navigate('/task/create')}>
              Nueva Tarea
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
