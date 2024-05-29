import {TaskType} from "../../model/model.ts";
import styled from "styled-components";

type TaskCardProps = {
    task: TaskType,
}

const StyledArticle = styled.article`
    border: 1px solid lightgray;
    padding: 5px 10px;
`;

const StyledTaskIdentifier = styled.div`
    color: grey;
    font-size: .8rem;
    margin-top: .5rem;
`;

export default function TaskCard({task}: TaskCardProps) {
    return (
        <StyledArticle>
            <div>{task.description}</div>
            <StyledTaskIdentifier>TSK-{task.id}</StyledTaskIdentifier>
        </StyledArticle>
    )
}