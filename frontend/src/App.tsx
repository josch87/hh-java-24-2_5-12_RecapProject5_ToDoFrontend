import {Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.tsx";
import TasksPage from "./pages/tasks/TasksPage.tsx";
import CreateTaskPage from "./pages/tasks/CreateTaskPage.tsx";
import TaskDetailsPage from "./pages/tasks/TaskDetailsPage.tsx";
import EditTaskPage from "./pages/tasks/EditTaskPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskDetailsPage />} />
            <Route path="/tasks/:id/edit" element={<EditTaskPage />} />
            <Route path="/tasks/new" element={<CreateTaskPage />} />
        </Routes>
    )
}

export default App
