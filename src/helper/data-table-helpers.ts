// need function to take the column definitions and use the id from them to get the value out of the row definition

import { ColumnType, PurchaseTableType } from "../types/data-table-types";
import { FormValue } from "../types/forms";
import { InvestmentType, PurchaseType } from "../types/global";

export function columnDefinitionToValue(columnDefinitions: ColumnType[], rowData: PurchaseType[]): PurchaseTableType[] {
    return rowData.map((row) => {
        let newRowData = {}
        columnDefinitions.forEach((def) => newRowData = { ...newRowData, [def.id]: row[def.id] })
        return newRowData as PurchaseTableType;
    }) 
}

export function purchaseFormToPurchaseType(formValues: FormValue<string | number | InvestmentType>[]) {
    let purchase = {};
    formValues.forEach((formValue) => {
        purchase = {
            ...purchase,
            [formValue.id]: formValue.value,
        };
    });
    return purchase as PurchaseType;
}