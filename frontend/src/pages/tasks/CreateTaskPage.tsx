import MainTemplate from "../templates/MainTemplate.tsx";
import styled from "styled-components";

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
    return (
        <MainTemplate>
            <h1>Create task</h1>
            <StyledParagraph>Required fields are marked with an asterisk. *</StyledParagraph>
            <StyledForm>
                <StyledMain>
                    <StyledInputLine>
                        <StyledLabel htmlFor="description">Description *</StyledLabel>
                        <input type="text" id="description" name="description" required/>
                    </StyledInputLine>
                    <StyledInputLine>
                        <StyledLabel htmlFor="status">Status *</StyledLabel>
                        <StyledSelect id="status" required>
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