import MainTemplate from "../templates/MainTemplate.tsx";
import styled from "styled-components";
import BoardColumn from "./BoardColumn.tsx";
import {useTasks} from "../../data/taskData.tsx";

const StyledMainSection = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
`;

export default function TasksPage() {
    const {tasks, isLoading, isError} = useTasks();

    if (isLoading) {
        return (<p>Still loading</p>)
    }

    if (isError) {
        return (<p>Some error occurred!</p>)
    }

    if (!tasks) {
        return (<p>No tasks available.</p>);
    }

    const openTasks = tasks.filter((task) => task.status === "OPEN")
    const inProgressTasks = tasks.filter((task) => task.status === "IN_PROGRESS")
    const closedTasks = tasks.filter((task) => task.status === "DONE")

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