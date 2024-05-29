import {Link} from "react-router-dom";
import styled from "styled-components";

type ButtonProps = {
    children: React.ReactNode,
    linksTo?: string,
    primary?: boolean,
}

type StyledLinkProps = {
    $primary: boolean,
}

const StyledLink = styled(Link)<StyledLinkProps>`
    color: ${props => props.$primary ? "white" : "grey"};
    background-color: ${props => props.$primary ? "blueviolet" : "white"};
    font-weight: bold;
    text-decoration: none;
    padding: .3rem .7rem;
    border-radius: 5px;
    border: ${props => props.$primary ? undefined : "1px solid grey"}
`;

const StyledButton = styled.button<StyledLinkProps>`
    color: ${props => props.$primary ? "white" : "grey"};
    background-color: ${props => props.$primary ? "blueviolet" : "white"};
    font-weight: bold;
    text-decoration: none;
    padding: .3rem .7rem;
    border-radius: 5px;
    border: ${props => props.$primary ? undefined : "1px solid grey"};
    cursor: pointer;
`;

export default function Button({children, linksTo, primary = false}: ButtonProps) {

    if (linksTo) {
        return (
            <StyledLink to={linksTo} $primary={primary}>{children}</StyledLink>

        )

    }
    return (<>
            <StyledButton $primary={primary}>{children}</StyledButton>
    </>)
}