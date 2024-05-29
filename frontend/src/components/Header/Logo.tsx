import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledSpan = styled.span`
    font-size: 2rem;
    font-weight: 500;
    font-stretch: semi-expanded;
`;

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export default function Logo() {
    return (
        <StyledSpan>
            <StyledLink to="/">TaskDesk</StyledLink>
        </StyledSpan>
    )
}