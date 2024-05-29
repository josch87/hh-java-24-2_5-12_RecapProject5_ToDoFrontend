import {TaskType} from "../../model/model.ts";
import TaskCard from "../../components/Tasks/TaskCard.tsx";
import styled from "styled-components";

type BoardColumnProps = {
    tasks: TaskType[],
    heading: string,
}

const StyledBoardColumn = styled.div`
    background-color: #fafafa;
    padding: .5rem;
    min-width: 350px;
`;

const StyledHeader = styled.div`
    margin-bottom: 1rem;
    margin-left: 10px;
    font-size: .9rem;
`;

const StyledBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3rem;
`;


export default function BoardColumn({tasks, heading}: BoardColumnProps) {
    return (
        <StyledBoardColumn>
            <StyledHeader>{`${heading} ${tasks.length}`}</StyledHeader>
            <StyledBody>
            {tasks.map((task) => {
                return (
                    <TaskCard task={task} key={task.id}/>
                )
            })}
            </StyledBody>
        </StyledBoardColumn>
    )
}