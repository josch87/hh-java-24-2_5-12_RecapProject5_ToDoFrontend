import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledUnorderedList = styled.ul`
    display: flex;
    gap: .5rem;
    margin-right: 1rem;
`;

const StyledListItem = styled.li`
    list-style-type: none;
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    border-radius: 5px;
    padding: .5rem;

    &:hover {
        background-color: lightgray;

    }
`;

export default function MainNavigation() {
    return (
        <nav>
            <StyledUnorderedList>
                <StyledListItem>
                    <StyledLink to="/">Dashboard</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/tasks">Tasks</StyledLink>
                </StyledListItem>
            </StyledUnorderedList>
        </nav>
    )
}