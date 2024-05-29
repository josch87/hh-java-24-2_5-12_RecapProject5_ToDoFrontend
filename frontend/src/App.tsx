import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import TasksPage from "./pages/tasks/TasksPage.tsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/new" element={<TasksPage />} />
        </Routes>
    )
}

export default App
