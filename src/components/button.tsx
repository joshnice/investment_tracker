import styled from "@emotion/styled";
import { Button as MUIButton, ButtonTypeMap } from "@mui/material";
import React, { FunctionComponent,  } from "react";

interface ButtonProps {
    height?: number;
    onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ height = 30, onClick, children }) => 
    <StyledButton variant="outlined" height={height} onClick={onClick}> {children}</StyledButton>

const StyledButton = styled(MUIButton)<{ height: number }>`
    min-width: 100px;
    height: ${({ height }) => height};
`;

export default Button;