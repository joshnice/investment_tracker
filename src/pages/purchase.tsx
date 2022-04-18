import styled from "@emotion/styled";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getStockPrices } from "../APIs/stock";
import DataTableComponent from "../components/data-table";
import HomeButton from "../components/home-button";
import { columnDefinitionToValue } from "../helper/data-table-helpers";
import { mockPurchases } from "../mock_data/mock_data";
import { HomeButtonContainer } from "../styles/home-button-contanier";
import { ColumnType, PurchaseTableType } from "../types/data-table-types";
import { PurchaseType } from "../types/global";

// Remove export once mock data is removed


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

    const [investmentPurchases, setInvestmentPurchases] = useState<PurchaseTableType[]>([]);

    useEffect(() => {
        const getStockPricesAsync = async () => {
            const prices = await getStockPrices(mockPurchases.map(({ code }) => code ));
            const updatedInvestmentPurchases = mockPurchases.map(( investment ) => ({...investment, value: (prices.find(({ code }) => code === investment.code )?.price || 0)}))
            const mappedTableValues = columnDefinitionToValue(purchaseColumnNames, updatedInvestmentPurchases);
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