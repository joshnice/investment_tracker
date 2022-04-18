import styled from "@emotion/styled";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getStockPrices } from "../APIs/stock";
import DataTableComponent from "../components/data-table";
import HomeButton from "../components/home-button";
import { mockPurchases } from "../mock_data/mock_data";
import { HomeButtonContainer } from "../styles/home-button-contanier";
import { ColumnType } from "../types/data-table-types";
import { InvestmentType } from "../types/global";

// Remove export once mock data is removed
export interface PurchaseTableType {
    name: string;
    date: Date;
    type: InvestmentType;
    source: string;
    marketCap: "micro" | "low" | "medium" | "high"; // Want to work this out dynamically using either an API call or calcing it ourselves
    amount: number;
    paid: number;
    value: number | undefined;
    stockCode: string;
}

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

    const [investmentPurchases, setInvestmentPurchases] = useState(mockPurchases);

    useEffect(() => {
        const getStockPricesAsync = async () => {
            const prices = await getStockPrices(investmentPurchases.map(({ stockCode }) => stockCode ));
            const updatedInvestmentPurchases = investmentPurchases.map(( investment ) => ({...investment, value: (prices.find(({ code }) => code === investment.stockCode )?.price || 0)}))
            setInvestmentPurchases(updatedInvestmentPurchases);
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