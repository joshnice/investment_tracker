import { Button } from "@mui/material";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const HomeButtonCompoent: FunctionComponent = () => { 
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate("/")}>
            Home
        </Button>
    );
}

export default HomeButtonCompoent;