import styled from "@emotion/styled";
import { RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import { FunctionComponent } from "react";

interface RadioButtons<ValueType> {
    value: ValueType;
    name: string;
}

interface RadioButtonsProps<ValueType> {
    title: string;
    values: RadioButtons<ValueType>[];
    initialValue?: ValueType;
};

const RadioButtonsComponent = <ValueType,>({ title, values, initialValue } :RadioButtonsProps<ValueType>) => (
    <RadioButtonsContainer>
        <div className="title">{title}</div>
        <RadioGroup defaultValue={initialValue} className="radio-group" row>
            {values.map((val) => (
                <FormControlLabel
                    className="radio-button" 
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