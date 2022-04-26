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
    return <TextField 
        label={label} 
        variant="outlined" 
        size="small" 
        onChange={onChange}
        value={value}
        error={error}
        helperText={errorMessage}
        fullWidth
    />
}

export default TextInputComponent;