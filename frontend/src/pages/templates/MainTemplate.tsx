import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header.tsx";

type MainTemplateProps = {
    children: React.ReactNode,
}

const StyledMain = styled.main`
    margin: 4rem;
`;

export default function MainTemplate({children}: MainTemplateProps) {
    return (
        <>
            <Header />
            <StyledMain>
                {children}
            </StyledMain>

        </>
    )
}