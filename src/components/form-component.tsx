import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal } from "@mui/material";
import { FunctionComponent } from "react";

interface FormProps {
    open: boolean;
    submit: () => void;
    disableSubmit: boolean;
    cancel: () => void;
}

const FormComponent: FunctionComponent<FormProps> = ({ open, submit, disableSubmit, cancel }) => (
    <Dialog open={open} PaperProps={{ sx: { width: "50vw", maxHeight: "80vh", minHeight: "80vh" } }} scroll="paper" onBackdropClick={cancel}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>We need some content</DialogContent>
        <DialogActions>
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={submit} disabled={disableSubmit}>Save</Button>
        </DialogActions>        
    </Dialog>
)

export default FormComponent;