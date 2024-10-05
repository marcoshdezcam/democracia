import { Route, Routes } from "react-router-dom";

import Login from "@/pages/Login/login";
import Register from "./pages/register";
import TasksPage from "@/pages/tasks";
import NewTask from "./pages/newTask";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<TasksPage />} path="/tasks" />
      <Route element={<NewTask />} path="/newTask" />
    </Routes>
  );
}

export default App;
