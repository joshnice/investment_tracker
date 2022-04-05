import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/button";

const HomeButtonCompoent: FunctionComponent = () => { 
    const navigate = useNavigate();

    return (
        <Button variant="outlined" onClick={() => navigate("/")}>
            Home
        </Button>
    );
}

export default HomeButtonCompoent;