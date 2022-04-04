import { Button } from "@mui/material";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "../types/global";

const HomeComponent: FunctionComponent = () => {
    const navigate = useNavigate();
    const navigateToPage = (page: Pages) => {
        navigate(page.toLowerCase());
    }

    return (
        <div>
            <h3>Home</h3>
            <div>
                <Button variant="outlined" onClick={() => navigateToPage(Pages.OVERVIEW)} >Overview</Button>
                <Button variant="outlined" onClick={() => navigateToPage(Pages.PURCHASE)}>Purchase</Button>
                <Button variant="outlined" onClick={() => navigateToPage(Pages.SELL)}>Sell</Button>
            </div>
        </div>
    )
}

export default HomeComponent;