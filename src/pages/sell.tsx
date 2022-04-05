import React, { FunctionComponent } from "react";
import HomeButton from "../components/home-button";
import { HomeButtonContainer } from "../styles/home-button-contanier";

const SellComponent: FunctionComponent = () => {
    return (
        <>
            <HomeButtonContainer>
                <HomeButton />
            </HomeButtonContainer>
            SellComponent
        </>
    )
}

export default SellComponent;