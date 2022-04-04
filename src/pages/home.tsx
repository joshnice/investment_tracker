import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../types/global";
import styled from '@emotion/styled'

const HomeComponent: FunctionComponent = () => {
    const navigate = useNavigate();
    const navigateToPage = (page: Pages) => {
        navigate(page.toLowerCase());
    }

    return (
        <div>
            <h3>Home</h3>
            <NavigationContainer>
                <NavigationButton variant="outlined" onClick={() => navigateToPage(Pages.OVERVIEW)} >Overview</NavigationButton>
                <NavigationButton variant="outlined" onClick={() => navigateToPage(Pages.PURCHASE)}>Purchase</NavigationButton>
                <NavigationButton variant="outlined" onClick={() => navigateToPage(Pages.SELL)}>Sell</NavigationButton>
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

const NavigationButton = styled(Button)`
    width: 100px;
`

export default HomeComponent;