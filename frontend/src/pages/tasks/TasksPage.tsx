import MainTemplate from "../templates/MainTemplate.tsx";
import {useEffect, useState} from "react";
import {TaskType} from "../../model/model.ts";
import axios from "axios";

export default function TasksPage() {
    const [tasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        getAllTasks();
    }, []);

    function getAllTasks() {
        axios.get<TaskType[]>("/api/todo")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    return (
        <MainTemplate>
            <h1>My Tasks</h1>
        </MainTemplate>
    )
}