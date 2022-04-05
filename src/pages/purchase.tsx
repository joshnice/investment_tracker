import React, { FunctionComponent } from "react";
import HomeButton from "../components/home-button";
import { HomeButtonContainer } from "../styles/home-button-contanier";

const PurchaseComponent: FunctionComponent = () => {
    return (
        <>
            <HomeButtonContainer>
                <HomeButton />
            </HomeButtonContainer>
            PurchaseComponent
        </>
    )
}

export default PurchaseComponent;