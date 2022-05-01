import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { FunctionComponent } from "react";

interface SelectItem {
    value:  string | number;
    name: string;
} 

interface SelectButtonProps {
    title: string;
    values: SelectItem[];
    selectedValue: string | number;
    onChange: (event: SelectChangeEvent<string | number>) => void;
};

const SelectComponent: FunctionComponent<SelectButtonProps> = ({ title, values, selectedValue, onChange }) => (
    <Box>
        <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                value={selectedValue}
                label={title}
                onChange={onChange}
            >
                {values.map((val) => <MenuItem key={val.name} value={val.value}>{val.name}</MenuItem> )}
            </Select>
        </FormControl>
    </Box>
);

export default SelectComponent;