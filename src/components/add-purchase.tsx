import styled from "@emotion/styled";
import { ChangeEvent, FunctionComponent, useState } from "react";
import { isCryptoCodeValid } from "../APIs/crypto";
import { isStockValid } from "../APIs/stock";
import { FormValue } from "../types/forms";
import { InvestmentType } from "../types/global";
import RadioButtonsComponent from "./forms/radio-buttons";
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

    const [type, setType] = useState<InvestmentType>("Stock");

    const [code, setCode] = useState<FormValue<string>>({ value: "", valid: false, message: "", touched: false, loading: false });

    // Handlers
    const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        const valid = value != "" && value.length > 3;
        const message = valid ? "": "Name has to be longer than 3 letters";
        setName({ value, valid, message, touched: true });
    };

    const [checkValidCode, setCheckValidCode] = useState<NodeJS.Timeout | null>(null);

    const checkCodeValid = (code: string) => {
        if (checkValidCode != null) {
            clearTimeout(checkValidCode);
        }
        setCheckValidCode(setTimeout(async () => {
            const valid = type === "Stock" ? await isStockValid(code) : await isCryptoCodeValid(code);
            console.log("valid", valid);
            const message = valid ? "": `Code is not a valid ${type.toLowerCase()} `;
            setCode({ value: code, valid, message, touched: true, loading: false });

        }, 1000));
    }

    const handleCodeChange = async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        checkCodeValid(value);
        setCode({ value, valid: false, message: "Checking...", touched: true, loading: true });
    };

    const handleTypeChange = (type: InvestmentType) => {
        setCode({ ...code, message: "Checking...", loading: true });
        setType(type);
        checkCodeValid(code.value);
    }

    return (
        <AddPurchaseContainer>
            <TextInputComponent 
                label="Name" 
                value={name.value}
                onChange={handleNameChange}
                type="text"
                error={name.touched && !name.valid}
                errorMessage={name.message}
            />
            <RadioButtonsComponent<InvestmentType> 
                title="Type"
                onChange={(event) => handleTypeChange(event.target.value as InvestmentType)}
                selectedValue={type}
                values={[
                    { value:"Stock", name:"Stock" },
                    { value:"Cryptocurrency", name: "Crypto"},   
                ]} 
            />
            <TextInputComponent 
                label="Code" 
                value={code.value}
                onChange={handleCodeChange}
                type="text"
                loading={code.loading}
                error={code.touched && !code.valid}
                errorMessage={code.message}
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
    gap: 20px;
`;

export default AddPurchaseComponent; 