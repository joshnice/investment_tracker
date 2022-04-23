import styled from "@emotion/styled";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getCryptoPrices } from "../APIs/crypto";
import { getStockPrices } from "../APIs/stock";
import DataTableComponent from "../components/data-table";
import FormComponent from "../components/form-component";
import HomeButton from "../components/home-button";
import { columnDefinitionToValue } from "../helper/data-table-helpers";
import { mockPurchases } from "../mock_data/mock_data";
import { Button } from "../styles/button";
import { HomeButtonContainer } from "../styles/home-button-container";
import { ColumnType, PurchaseTableType } from "../types/data-table-types";

/*

Purchase todo:

Add purchase
Delete purchase 
Edit purchase

Calculate market cap - Stock only
Calculate class - Crypto
Calculate worth amounts of shares owned x value
Calculate profit/loss
Auto refresh every 10 seconds

*/

const purchaseColumnNames: ColumnType[] = [
    { id: "name", columnHeader: "Name" }, 
    { id: "type", columnHeader: "Type" },
    { id: "source", columnHeader: "Source" },
    { id: "class", columnHeader: "Class" },
    { id: "date", columnHeader: "Date" }, 
    { id: "amount", columnHeader: "Amount" },
    { id: "paid", columnHeader: "Paid" },
    { id: "value", columnHeader: "Value" },
];

const PurchaseComponent: FunctionComponent = () => {

    // Component State
    const [investmentPurchases, setInvestmentPurchases] = useState<PurchaseTableType[]>([]);

    const [addPurchaseFrom, setAddPurchaseFrom] = useState<boolean>(false);


    useEffect(() => {
        const getStockPricesAsync = async () => {
            const stockPrices = await getStockPrices(mockPurchases.filter(({ type }) => type === "Stock").map(({ code }) => code ));
            const cryptoPrices = await getCryptoPrices(mockPurchases.filter(({ type }) => type === "Crypto").map(({ code }) => code));
            const stockInvestments = mockPurchases.filter(({ type }) => type === "Stock" ).map(( investment ) => ({...investment, value: (stockPrices.find(({ code }) => code === investment.code )?.price || 0)}))
            const cryptoInvestments = mockPurchases.filter(({ type }) => type === "Crypto" ).map(( investment ) => ({...investment, value: (cryptoPrices.find(({ code }) => code === investment.code )?.price || 0)}))
            const mappedTableValues = columnDefinitionToValue(purchaseColumnNames, [...stockInvestments, ...cryptoInvestments ]);
            setInvestmentPurchases(mappedTableValues);
        };

        getStockPricesAsync();

    }, []);
    
    return (
        <PurchaseContainer>
            <HomeButtonContainer>
                <HomeButton />
            </HomeButtonContainer>
            <h2 style={{ margin: "0px" }}>Investment Purchase</h2>
            <DataTableComponent<PurchaseTableType> columns={purchaseColumnNames} rows={investmentPurchases} containerClassName="data-table-container"/>
            <Button onClick={() => setAddPurchaseFrom(true)}>Add Purchase</Button>
            <FormComponent open={addPurchaseFrom}/>
        </PurchaseContainer>
    )
}

const PurchaseContainer = styled.div`
    .data-table-container {
        margin: 20px 0px;
        color: white !important;
        background-color: #15202B;
        border: 1px #d5d8dc solid;
        .MuiTableCell-root {
            color: #d5d8dc !important;
        }
    }
`;

export default PurchaseComponent;