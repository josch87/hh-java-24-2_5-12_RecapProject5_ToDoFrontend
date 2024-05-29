import {ChangeEventHandler, FormEventHandler} from "react";
import styled from "styled-components";
import {NewTaskDTOType} from "../../model/model.ts";
import {useNavigate} from "react-router-dom";

type TaskFormProps = {
    handleSubmit: FormEventHandler<HTMLFormElement>,
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
    newTask: NewTaskDTOType,
}

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

export default function TaskForm({handleSubmit, handleChange, newTask}: TaskFormProps) {

    const navigate = useNavigate();

    return (
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
                        <option value="DONE">Done</option>
                    </StyledSelect>
                </StyledInputLine>
            </StyledMain>

            <StyledFooter>
                <button type={"button"} onClick={() => {navigate(-1)}}>Cancel</button>
                <button type="submit">Create</button>
            </StyledFooter>


        </StyledForm>
    )
}