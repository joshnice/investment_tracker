import { InvestmentType, PurchaseType } from "./global";

export interface ColumnType {
    id: keyof PurchaseType;
    columnHeader: string;
}

export type PurchaseTableType = Omit<PurchaseType, "code">;
