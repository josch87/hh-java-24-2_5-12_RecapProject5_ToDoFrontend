import styled from "styled-components";
import Logo from "./Logo";
import MainNavigation from "./MainNavigation.tsx";
import Button from "../Button/Button.tsx";

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
            <MainNavigation />
            <Button linksTo="/tasks/new">Create</Button>
        </StyledHeader>
    )
}