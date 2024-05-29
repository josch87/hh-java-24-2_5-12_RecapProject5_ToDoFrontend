import MainTemplate from "../templates/MainTemplate.tsx";
import styled from "styled-components";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {NewTaskDTOType, TaskType} from "../../model/model.ts";
import {useNavigate} from "react-router-dom";
import TaskForm from "./TaskForm.tsx";

const StyledParagraph = styled.p`
    font-size: .8rem;
    font-weight: 300;
`;

const StyledErrorBox = styled.div`
    color: red;
    border: 1px solid red;
    margin-top: .5rem;
    padding: 5px 10px;
`;

export default function CreateTaskPage() {

    const [newTask, setNewTask] = useState<NewTaskDTOType>({description: "", status: "OPEN"});
    const [errorMessage ,setErrorMessage] = useState({message: ""});
    const navigate = useNavigate();

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setNewTask({...newTask, [event.target.name]: event.target.value})
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post<TaskType>("/api/todo", newTask)
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
            <h1>Create task</h1>
            <StyledParagraph>Required fields are marked with an asterisk. *</StyledParagraph>
            <TaskForm handleSubmit={handleSubmit} handleChange={handleChange} newTask={newTask}/>
            {errorMessage.message && <StyledErrorBox>{errorMessage.message}</StyledErrorBox>}
        </MainTemplate>
    )
}