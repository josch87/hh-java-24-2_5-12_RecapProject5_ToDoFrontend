import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid lightgray;
    padding: 0 2rem;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
        </StyledHeader>
    )
}