import styled from "@emotion/styled";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { isCryptoCodeValid } from "../APIs/crypto";
import { isStockValid } from "../APIs/stock";
import { FormValue } from "../types/forms";
import { InvestmentType } from "../types/global";
import RadioButtonsComponent from "./forms/radio-buttons";
import SelectComponent from "./forms/select-component";
import TextInputComponent from "./forms/text-input";

interface AddPurchaseProps {
    setValues: (values: FormValue<string | number | InvestmentType>[]) => void;
    isValid: (valid: boolean) => void; 
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

enum NumberInput {
    AMOUNT = "Amount",
    PAID = "Paid",
}

const AddPurchaseComponent: FunctionComponent<AddPurchaseProps> = ({ setValues, isValid }) => {

    // State Values
    const [name, setName] = useState<FormValue<string>>({ id: "name", value: "", valid: false, message: "", touched: false });

    const [type, setType] = useState<FormValue<InvestmentType>>({ id: "class",  value: "Stock", valid: true, message: "", touched: true });

    const [code, setCode] = useState<FormValue<string>>({ id: "code", value: "", valid: false, message: "", touched: false, loading: false });

    const [source, setSource] = useState<FormValue<string>>({ id: "source", value: "", valid: false, message: "", touched: false });

    const [amount, setAmount] = useState<FormValue<number | string>>({ id: "amount", value: 0, valid: false, message: "", touched: false });

    const [paid, setPaid] = useState<FormValue<number | string>>({ id: "paid", value: 0, valid: false, message: "", touched: false });    

    // Handlers
    const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        const valid = value != "" && value.length > 3;
        const message = valid ? "": "Name has to be longer than 3 letters";
        setName({ id: "name", value, valid, message, touched: true });
    };

    const [checkValidCode, setCheckValidCode] = useState<NodeJS.Timeout | null>(null);

    const checkCodeValid = (code: string) => {
        if (checkValidCode != null) {
            clearTimeout(checkValidCode);
        }
        setCheckValidCode(setTimeout(async () => {
            const valid = type.value === "Stock" ? await isStockValid(code) : await isCryptoCodeValid(code);
            console.log("valid", valid);
            const message = valid ? "": `Code is not a valid ${type.value.toLowerCase()} `;
            setCode({ id: "code", value: code, valid, message, touched: true, loading: false });

        }, 1000));
    }

    const handleCodeChange = async (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = event.target;
        checkCodeValid(value);
        setCode({ id: "code", value, valid: false, message: "Checking...", touched: true, loading: true });
    };

    const handleTypeChange = (newType: InvestmentType) => {
        if (code.touched) {
            setCode({ ...code, message: "Checking...", loading: true });
            checkCodeValid(code.value);
        } 
        setType({ ...type, value: newType});
    }

    const handleSourceChange = (event: SelectChangeEvent<string | number>) => {
        const value = event.target.value as string;
        setSource({ id: "source", value: value, valid: value != "", touched: false, message: "" })
    }

    const handleNumberChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, inputType: NumberInput) => {
        const { value } = event.target;
        let valid = value != "" && value.length > 0;
        let message = valid ? "": `${inputType.toString()} has to be a value`;
        const parsedValue = parseFloat(value);
        if (parsedValue === NaN) {
            valid = false;
            message = "Input a valid number"
        }

        if (inputType === NumberInput.AMOUNT) {
            setAmount({ id: "amount", value: valid ? parsedValue : value, valid, message, touched: true }); 
        } else if (inputType === NumberInput.PAID) {
            setPaid({ id: "paid", value: valid ? parsedValue : value, valid, message, touched: true });
        }

    }

    useEffect(() => {
        isValid(name.valid && type.valid && code.valid && source.valid && amount.valid && paid.valid)
    }, [name.valid, type.valid, code.valid, source.valid, amount.valid, paid.valid]);


    useEffect(() => {
        setValues([name, type, code, source, amount, paid])
    }, [name.value, type.value, code.value, source.value, amount.value, paid.value]);

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
                selectedValue={type.value}
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
            <SelectComponent
                title="Source"
                selectedValue={source.value}                
                values={[
                    { value:"Stock", name:"FreeTrade" },
                    { value:"Crypto.com", name: "Crypto.com"},
                    { value:"Gemini", name: "Gemini"},
                ]} 
                onChange={handleSourceChange}
            />
            <TextInputComponent 
                label="Amount" 
                value={amount.value.toString()}
                onChange={(event) => handleNumberChange(event, NumberInput.AMOUNT)}
                type="number"
                error={amount.touched && !amount.valid}
                errorMessage={amount.message}
            />
            <TextInputComponent 
                label="Paid" 
                value={paid.value.toString()}
                onChange={(event) => handleNumberChange(event, NumberInput.PAID)}
                type="number"
                error={paid.touched && !paid.valid}
                errorMessage={paid.message}
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