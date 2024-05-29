import {Link} from "react-router-dom";
import styled from "styled-components";

type ButtonProps = {
    children: React.ReactNode,
    linksTo?: string,
}

const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
    text-decoration: none;
    background-color: blueviolet;
    padding: .3rem .7rem;
    border-radius: 5px;
`;

export default function Button({children, linksTo}: ButtonProps) {

    if (linksTo) {
    return (
        <StyledLink to={linksTo}>{children}</StyledLink>

    )

    }
    return (<></>)
}