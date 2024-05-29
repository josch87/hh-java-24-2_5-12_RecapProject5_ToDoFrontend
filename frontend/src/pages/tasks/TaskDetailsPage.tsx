import MainTemplate from "../templates/MainTemplate.tsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {TaskType} from "../../model/model.ts";

export default function TaskDetailsPage() {
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

    if (!task) {
        return (
            <MainTemplate>
                <p>This task does not exist.</p>
            </MainTemplate>
        )
    }


    return (
        <MainTemplate>
            <h1>{task.description}</h1>
        </MainTemplate>
    )
}