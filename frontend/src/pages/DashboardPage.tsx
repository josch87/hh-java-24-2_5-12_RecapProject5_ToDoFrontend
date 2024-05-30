import MainTemplate from "./templates/MainTemplate.tsx";
import {useTasks} from "../data/taskData.tsx";

export default function DashboardPage() {
    /*
        const [tasks, setTasks] = useState<TaskType[]>([]);

        useEffect(() => {
            getTasks();
        }, []);

        function getTasks() {
            axios.get("/api/todo")
                .then((response) => {
                    setTasks(response.data)
                })
        }
    */

    const {tasks, isLoading, isError} = useTasks();

    if (isLoading) {
        return (<></>)
    }

    if (isError) {
        return (<></>)
    }

    if (!tasks) {
        return (<p>No tasks available.</p>)
    }

    return (
        <MainTemplate>
            <h1>Dashboard</h1>
            <h2>Statistics</h2>
            <table>
                <thead>
                <tr>
                    <th>Status</th>
                    <th>Count</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Open</td>
                    <td>{tasks.filter((task) => task.status === "OPEN").length}</td>
                </tr>
                <tr>
                    <td>In Progress</td>
                    <td>{tasks.filter((task) => task.status === "IN_PROGRESS").length}</td>
                </tr>
                <tr>
                    <td>Done</td>
                    <td>{tasks.filter((task) => task.status === "DONE").length}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>{tasks.length}</th>
                </tr>
                </tbody>
            </table>
        </MainTemplate>
    )
}