import MainTemplate from "../templates/MainTemplate.tsx";
import TaskForm from "./TaskForm.tsx";
import React, {ChangeEvent, useEffect, useState} from "react";
import {StyledErrorBox, StyledParagraph} from "./CreateTaskPage.tsx";
import {TaskType} from "../../model/model.ts";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function EditTaskPage() {
    const [taskToUpdate, setTaskToUpdate] = useState<TaskType>({id: "-1", description: "", status: "OPEN"});
    const [errorMessage ,setErrorMessage] = useState({message: ""});
    const navigate = useNavigate();

    const params = useParams();

    useEffect(() => {
        getTask();
    }, []);

    function getTask() {
        axios.get<TaskType>("/api/todo/" + params.id)
            .then((response) => {
                setTaskToUpdate(response.data)
            })
    }

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setTaskToUpdate({...taskToUpdate, [event.target.name]: event.target.value})
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.put<TaskType>(`/api/todo/${params.id}/update`, taskToUpdate)
            .then(() => {
                navigate("/tasks")
            })
            .catch((error) => {
                console.error(error.message);
                setErrorMessage({message: "We encountered a problem. Please try again."})
            })
    }

    return (
        <MainTemplate>
            <h1>Update task</h1>
            <StyledParagraph>Required fields are marked with an asterisk. *</StyledParagraph>
            <TaskForm handleSubmit={handleSubmit} handleChange={handleChange} newTask={taskToUpdate}/>
            {errorMessage.message && <StyledErrorBox>{errorMessage.message}</StyledErrorBox>}
        </MainTemplate>
    )
}