import { Route, Routes } from "react-router-dom";

import TasksPage from "@/pages/tasks";

function App() {
  return (
    <Routes>
      <Route element={<TasksPage />} path="/tasks" />
    </Routes>
  );
}

export default App;
