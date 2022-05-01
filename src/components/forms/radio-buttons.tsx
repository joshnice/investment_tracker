import styled from "@emotion/styled";
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import { ChangeEvent, FunctionComponent } from "react";

interface RadioButtons<ValueType> {
    value: ValueType;
    name: string;
}

interface RadioButtonsProps<ValueType> {
    title: string;
    values: RadioButtons<ValueType>[];
    selectedValue: ValueType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const RadioButtonsComponent = <ValueType,>({ title, values, selectedValue, onChange } :RadioButtonsProps<ValueType>) => (
    <RadioButtonsContainer>
        <div className="title">{title}</div>
        <RadioGroup value={selectedValue} onChange={onChange} className="radio-group" row>
            {values.map((val) => (
                <FormControlLabel
                    className="radio-button"
                    key={val.name}
                    value={val.value} 
                    control={<Radio sx={{ color: "#404040", '&.Mui-checked': { color: "#404040"} }} />}
                    label={val.name} 
                />
            ))}
        </RadioGroup>
    </RadioButtonsContainer>
);

const RadioButtonsContainer = styled.div`
    width: 100%;
    .title {
        margin: 0px 0px 5px 5px
    }
    .radio-group {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .radio-button {
        margin: 0px 40px 0px 0px;
    }

`;

export default RadioButtonsComponent;