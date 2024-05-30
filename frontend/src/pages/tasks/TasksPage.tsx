import MainTemplate from "../templates/MainTemplate.tsx";
import styled from "styled-components";
import BoardColumn from "./BoardColumn.tsx";
import {useTasks} from "../../data/taskData.tsx";
import {filterTasksByStatus} from "../../utils/taskUtils.ts";

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

    return (
        <MainTemplate>
            <h1>My Tasks</h1>
            <StyledMainSection>
                <BoardColumn tasks={filterTasksByStatus(tasks, "OPEN")} heading={"Open"}/>
                <BoardColumn tasks={filterTasksByStatus(tasks, "IN_PROGRESS")} heading={"In Progress"}/>
                <BoardColumn tasks={filterTasksByStatus(tasks, "DONE")} heading={"Done"}/>
            </StyledMainSection>
        </MainTemplate>
    )
}