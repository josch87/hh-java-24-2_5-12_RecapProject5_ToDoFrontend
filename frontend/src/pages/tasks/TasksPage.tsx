import MainTemplate from "../templates/MainTemplate.tsx";
import {useEffect, useState} from "react";
import {TaskType} from "../../model/model.ts";
import axios from "axios";
import styled from "styled-components";
import BoardColumn from "./BoardColumn.tsx";

const StyledMainSection = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
`;

export default function TasksPage() {
    const [tasks, setTasks] = useState<TaskType[]>([])

    const openTasks = tasks.filter((task) => task.status === "OPEN")
    const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS")
    const closedTasks = tasks.filter((task) => task.status === "DONE")

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
            <StyledMainSection>
                <BoardColumn tasks={openTasks} heading={"Open"}/>
                <BoardColumn tasks={inProgressTasks} heading={"In Progress"}/>
                <BoardColumn tasks={closedTasks} heading={"Done"}/>
            </StyledMainSection>
        </MainTemplate>
    )
}