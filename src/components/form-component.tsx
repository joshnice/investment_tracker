import { Dialog, DialogActions, DialogContent, DialogTitle, Modal } from "@mui/material";
import { FunctionComponent } from "react";
import Button from "./button";

interface FormProps {
    open: boolean;
    submit: () => void;
    cancel: () => void;
}

const FormComponent: FunctionComponent<FormProps> = ({ open, submit, cancel }) => (
    <Dialog open={open} PaperProps={{ sx: { width: "50vw", maxHeight: "80vh", minHeight: "80vh" } }} scroll="paper">
        <DialogTitle>Title</DialogTitle>
        <DialogContent>We need some content</DialogContent>
        <DialogActions>
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={submit}>Save</Button>
        </DialogActions>        
    </Dialog>
)

export default FormComponent;