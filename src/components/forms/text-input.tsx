import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent } from "react";

interface TextInputProps {
    label: string;
    value: string;
    error: boolean;
    errorMessage: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TextInputComponent: FunctionComponent<TextInputProps> = ({ label, value, error, errorMessage, onChange }) => {
    return <TextInputContainer>
        <TextField 
            label={label} 
            variant="outlined" 
            size="small" 
            onChange={onChange}
            value={value}
            error={error}
            fullWidth
        />
        <p className="error-message">{errorMessage}</p>
    </TextInputContainer>
}

const TextInputContainer = styled.div`
    width: 100%;
    .error-message {
        font-size: 12px;
        color: red;
        margin: 5px 0px 0px 0px;
        height: 10px;
    }
`;

export default TextInputComponent;