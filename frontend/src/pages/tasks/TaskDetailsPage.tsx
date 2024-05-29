import MainTemplate from "../templates/MainTemplate.tsx";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {TaskType} from "../../model/model.ts";
import Button from "../../components/Button/Button.tsx";

export default function TaskDetailsPage() {
    const navigate = useNavigate();
    const params = useParams();

    const initialTask: TaskType = {
        id: "",
        description: "",
        status: "OPEN"
    }
    const [task, setTask] = useState<TaskType>(initialTask);

    useEffect(() => {
        getTask();
    }, []);

    function getTask() {
        axios.get("/api/todo/" + params.id)
            .then((response) => {
                setTask(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }

    function deleteTask() {
        axios.delete("/api/todo/" + params.id)
            .then(() => {
                navigate("/tasks")
            })
            .catch((error) => {
                console.error(error.message);
            });
    }

    if (!task) {
        return (
            <MainTemplate>
                <p>This task does not exist.</p>
            </MainTemplate>
        )
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