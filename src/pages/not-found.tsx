import styled from "@emotion/styled";
import React, { FunctionComponent } from "react";
import HomeButtonCompoent from "../components/home-button";

const NotFoundComponent: FunctionComponent = () => {
    return (
        <HomeButtonContainer>
            <h3>Page not Found</h3>
            <HomeButtonCompoent />
        </HomeButtonContainer>
    )
}

const HomeButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default NotFoundComponent;