import styled from "@emotion/styled";
import { ChangeEvent, FunctionComponent, useEffect, useMemo, useState } from "react";
import { FormValue } from "../types/forms";
import TextInputComponent from "./forms/text-input";

interface AddPurchaseProps {

}

/*

Fields

Name - Input
Type - Either crypto or stock
Stock Code - Input - needs to be verified
Source - Drop down
Date - Date selector
Amount - Input (number)
Paid - Input (number)

*/

const AddPurchaseComponent: FunctionComponent<AddPurchaseProps> = () => {

    // State Values
    const [name, setName] = useState<FormValue<string>>({ value: "", valid: false, message: "", touched: false });

    // Handlers
    const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        const valid = Boolean(value && value.length < 3);
        const message = valid ? "Name has to be longer than 3 letters" : "";
        setName({ value, valid, message, touched: true });
    };

    return (
        <AddPurchaseContainer>
            <TextInputComponent 
                label="Investment Name" 
                value={name.value}
                onChange={handleNameChange} 
                error={name.touched && name.valid}
                errorMessage={name.message}
            />
        </AddPurchaseContainer>
    );
}

const AddPurchaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 10px 0px;
`;

export default AddPurchaseComponent; 