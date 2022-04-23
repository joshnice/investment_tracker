import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../types/global";
import styled from '@emotion/styled'
import Button  from "../components/button";

const HomeComponent: FunctionComponent = () => {
    const navigate = useNavigate();
    const navigateToPage = (page: Pages) => {
        navigate(page.toLowerCase());
    }

    return (
        <div>
            <h3>Home</h3>
            <NavigationContainer>
                <Button onClick={() => navigateToPage(Pages.OVERVIEW)} >Overview</Button>
                <Button onClick={() => navigateToPage(Pages.PURCHASE)}>Purchase</Button>
                <Button onClick={() => navigateToPage(Pages.SELL)}>Sell</Button>
            </NavigationContainer>
        </div>
    )
}

const NavigationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;



export default HomeComponent;