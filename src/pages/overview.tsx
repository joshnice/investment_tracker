import React, { FunctionComponent } from "react";
import HomeButton from "../components/home-button";
import { HomeButtonContainer } from "../styles/home-button-container";

const OverviewComponent: FunctionComponent = () => {
    return (
        <>
            <HomeButtonContainer>
                <HomeButton />
            </HomeButtonContainer>
            OverviewComponent
        </>
    )
}

export default OverviewComponent;