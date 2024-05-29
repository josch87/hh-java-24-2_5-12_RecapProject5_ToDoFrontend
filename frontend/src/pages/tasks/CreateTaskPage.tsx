import MainTemplate from "../templates/MainTemplate.tsx";
import styled from "styled-components";
import React, {ChangeEvent, useState} from "react";
import axios from "axios";
import {NewTaskDTOType, TaskType} from "../../model/model.ts";
import {useNavigate} from "react-router-dom";

const StyledParagraph = styled.p`
    font-size: .8rem;
    font-weight: 300;
`;

const StyledForm = styled.form`
    margin: 1rem 0;
    max-width: 500px;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: .8rem;
`;

const StyledInputLine = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    font-size: .8rem;
    font-weight: 600;
`;

const StyledSelect = styled.select`
    height: 28px;
`;

const StyledFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
`;

export default function CreateTaskPage() {

    const [newTask, setNewTask] = useState<NewTaskDTOType>({description: "", status: "OPEN"})
    const navigate = useNavigate();

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setNewTask({...newTask, [event.target.name]: event.target.value})
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post<TaskType>("/api/todo/", newTask)
            .then((response) => {
                navigate("tasks/" + response.data.id)
        })
            .catch((error) => {
                console.error(error.message);
            })
    }

    return (
        <MainTemplate>
            <h1>Create task</h1>
            <StyledParagraph>Required fields are marked with an asterisk. *</StyledParagraph>
            <StyledForm onSubmit={handleSubmit}>
                <StyledMain>
                    <StyledInputLine>
                        <StyledLabel htmlFor="description">Description *</StyledLabel>
                        <input type="text" id="description" name="description" onChange={handleChange} value={newTask.description} required/>
                    </StyledInputLine>
                    <StyledInputLine>
                        <StyledLabel htmlFor="status">Status *</StyledLabel>
                        <StyledSelect id="status" name="status" onChange={handleChange} value={newTask.status} required>
                            <option value="OPEN">Open</option>
                            <option value="IN_PROGRESS">In Progress</option>
                        </StyledSelect>
                    </StyledInputLine>
                </StyledMain>

                <StyledFooter>
                    <button type="submit">Create</button>
                </StyledFooter>
            </StyledForm>
        </MainTemplate>
    )
}