import styled from "@emotion/styled";
import { CircularProgress, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent } from "react";

interface TextInputProps {
    label: string;
    value: string;
    error: boolean;
    errorMessage: string;
    type: "number" | "text";
    loading?: boolean;
    onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TextInputComponent: FunctionComponent<TextInputProps> = ({ label, value, error, errorMessage, type, loading = false, onChange }) => {
    return <TextInputContainer loading={loading}>
        <TextField 
            label={label} 
            variant="outlined" 
            size="small" 
            onChange={onChange}
            type={type}
            value={value}
            error={error && !loading}
            autoComplete="off"
            fullWidth
        />
        <p className="error-message">
            {errorMessage}
            {loading && <CircularProgress size={15} />}
        </p>
    </TextInputContainer>
}

const TextInputContainer = styled.div<{ loading: boolean }>`
    width: 100%;
    .error-message {
        font-size: 12px;
        color: ${({ loading }) => loading ? "fontColor" : "red"};
        margin: 5px 0px 0px 0px;
        height: 10px;
        margin: 3px 5px 0px 5px;
        display: flex;
        justify-content: space-between;
    }
`;

export default TextInputComponent;