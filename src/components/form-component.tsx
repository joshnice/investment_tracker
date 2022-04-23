import { Dialog, DialogActions, DialogContent, DialogTitle, Modal } from "@mui/material";
import { FunctionComponent } from "react";

interface FormProps {
    open: boolean
}

const FormComponent: FunctionComponent<FormProps> = ({ open }) => (
    <Dialog open={open}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>We need some content</DialogContent>
        <DialogActions>Actions</DialogActions>        
    </Dialog>
)

export default FormComponent;