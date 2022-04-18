export enum Pages {
    HOME = "HOME",
    OVERVIEW = "OVERVIEW",
    PURCHASE = "PURCHASE",
    SELL = "SELL",
}

export type InvestmentType = "Stock" | "Crypto";

export interface PurchaseType {
    name: string;
    date: Date;
    type: InvestmentType;
    source: string;
    class: "micro" | "low" | "medium" | "high" | "ALT" | "STABLE" | "BTC" | "ETH";
    amount: number;
    paid: number;
    value: number | undefined;
    code: string;
}