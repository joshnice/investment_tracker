import styled from "@emotion/styled";
import React, { FunctionComponent, useEffect, useState } from "react";
import { getStockPrices } from "../APIs/stock";
import DataTableComponent from "../components/data-table";
import HomeButton from "../components/home-button";
import { mockPurchases } from "../mock_data/mock_data";
import { HomeButtonContainer } from "../styles/home-button-contanier";
import { InvestmentType } from "../types/global";

// Remove export once mock data is removed
export interface PurchaseTableType {
    name: string;
    date: Date;
    type: InvestmentType;
    source: string;
    class: string;
    amount: number;
    paid: number;
    value: number;
    stockCode: string;
}

const PurchaseColumnNames = ["Name", "Type", "Source", "Class", "Date", "Amount", "Paid", "Value"];

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
            <DataTableComponent<PurchaseTableType> columns={PurchaseColumnNames} rows={investmentPurchases} containerClassName="data-table-container"/>
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