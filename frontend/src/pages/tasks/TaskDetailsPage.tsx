import MainTemplate from "../templates/MainTemplate.tsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button.tsx";
import {mutate} from "swr";
import {useTask} from "../../data/taskData.tsx";

export default function TaskDetailsPage() {
    const navigate = useNavigate();
    const params = useParams();

    if (!params.id) {
        return (<p>Please specify an ID.</p>);
    }

    const {task, isLoading, isError} = useTask(params.id);

    if (isLoading) {
        return (<p>Still waiting to get task data...</p>)
    }

    if (isError) {
        return (<p>Was not able to fetch task data. Sorry.</p>)
    }

    if (!task) {
        return (
            <MainTemplate>
                <p>This task does not exist.</p>
            </MainTemplate>
        )
    }

    function deleteTask() {
        axios.delete("/api/todo/" + params.id)
            .then(() => {
                    mutate("/api/todo")
                    navigate("/tasks");
                }
            )
            .catch((error) => {
                console.error("Not able to delete task with ID " + params.id);
                console.error(error.message);
            });
    }

    return (
        <MainTemplate>
            <div>
                <h1>{task.description}</h1>
                <div>
                    <Button linksTo={`/tasks/${params.id}/edit`}>Edit</Button>
                    <Button onClick={deleteTask}>Delete</Button>
                </div>
            </div>
        </MainTemplate>
    )
}