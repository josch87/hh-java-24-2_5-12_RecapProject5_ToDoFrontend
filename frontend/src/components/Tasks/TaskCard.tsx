import {TaskType} from "../../model/model.ts";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

type TaskCardProps = {
    task: TaskType,
}

const StyledArticle = styled.article`
    border: 1px solid lightgray;
    padding: 5px 10px;
    cursor: pointer;
    background-color: white;

    &:hover {
        background-color: #efefef;
    }
`;

const StyledTaskIdentifier = styled.div`
    color: grey;
    font-size: .8rem;
    margin-top: .5rem;
`;

export default function TaskCard({task}: TaskCardProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/tasks/" + task.id)

    }
    return (
        <StyledArticle onClick={handleClick}>
            <div>{task.description}</div>
            <StyledTaskIdentifier>TSK-{task.id}</StyledTaskIdentifier>
        </StyledArticle>
    )
}