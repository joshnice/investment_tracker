import styled from "@emotion/styled";
import React, { FunctionComponent, useState } from "react";
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
}

const PurchaseColumnNames = ["Name", "Type", "Source", "Class", "Date", "Amount", "Paid", "Value"];

const PurchaseComponent: FunctionComponent = () => {
    
    const [investmentPurchases, setInvestmentPurchases] = useState(mockPurchases);

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
    }
`;

export default PurchaseComponent;