import styled from "@emotion/styled";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { FormValidation } from "../types/forms";
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

    // State
    const [name, setName] = useState<string>("");

    // Validation 
    const nameValidation: FormValidation = useMemo(() => {
        const valid = name.length < 3;
        return { valid, message: valid ? "Name has to be longer than 3 letters" : "" };
    }, [name]);
 
    return (
        <AddPurchaseContainer>
            <TextInputComponent 
                label="Investment Name" 
                value={name}
                onChange={({target}) => setName(target.value)} 
                error={nameValidation.valid}
                errorMessage={nameValidation.message}
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