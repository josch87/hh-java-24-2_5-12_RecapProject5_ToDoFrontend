import {Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.tsx";
import TasksPage from "./pages/tasks/TasksPage.tsx";
import CreateTaskPage from "./pages/tasks/CreateTaskPage.tsx";
import TaskDetailsPage from "./pages/tasks/TaskDetailsPage.tsx";
import EditTaskPage from "./pages/tasks/EditTaskPage.tsx";
import {SWRConfig} from "swr";
import axios from "axios";

    const options = {
        fetcher: (url: string) => axios.get(url).then(res => res.data)
    }

function App() {


    return (
        <SWRConfig value={options}>
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskDetailsPage />} />
            <Route path="/tasks/:id/edit" element={<EditTaskPage />} />
            <Route path="/tasks/new" element={<CreateTaskPage />} />
        </Routes>
        </SWRConfig>
    )
}

export default App
