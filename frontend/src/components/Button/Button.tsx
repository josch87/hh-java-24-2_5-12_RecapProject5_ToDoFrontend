import {Link} from "react-router-dom";
import styled from "styled-components";
import {MouseEventHandler, ReactNode} from "react";

type ButtonProps = {
    children: ReactNode,
    linksTo?: string,
    primary?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
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

export default function Button({children, linksTo, primary = false, onClick}: ButtonProps) {

    if (linksTo) {
        return (
            <StyledLink to={linksTo} $primary={primary}>{children}</StyledLink>

        )

    }
    return (<>
            <StyledButton $primary={primary} onClick={onClick}>{children}</StyledButton>
    </>)
}