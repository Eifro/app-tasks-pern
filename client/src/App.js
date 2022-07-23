import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/create" element={<TaskForm />} />
          <Route path="/task/edit/:id" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
