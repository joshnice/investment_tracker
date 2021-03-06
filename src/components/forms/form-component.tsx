import styled from "@emotion/styled";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal } from "@mui/material";
import { FunctionComponent } from "react";

interface FormProps {
    title: string;
    open: boolean;
    submit: () => void;
    disableSubmit: boolean;
    cancel: () => void;
}

const FormComponent: FunctionComponent<FormProps> = ({ title, open, submit, disableSubmit, cancel, children }) => (
    <Dialog open={open} PaperProps={{ sx: { width: "50vw", maxHeight: "80vh", minHeight: "80vh" } }} scroll="paper" onBackdropClick={cancel}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
            <FormButtonContainer>
                <Button onClick={cancel} className="form-button">Cancel</Button>
                <Button onClick={submit} className="form-button" disabled={disableSubmit}>Save</Button>
            </FormButtonContainer>
        </DialogActions>        
    </Dialog>
)

const FormButtonContainer = styled.div`
    padding: 10px;
    .form-button {
        width: 100px;
    }
`;

export default FormComponent;