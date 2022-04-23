import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import Button  from "./button";

const HomeButtonCompoent: FunctionComponent = () => { 
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate("/")}>
            Home
        </Button>
    );
}

export default HomeButtonCompoent;