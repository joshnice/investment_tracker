import { PurchaseTableType } from "../pages/purchase";

export const mockPurchases: PurchaseTableType[] = [{
        name: "Apple",
        type: "Stock",
        source: "Freetrade",
        marketCap: "high",
        date: new Date(),
        paid: 50,
        value: undefined,
        amount: 10,
        stockCode: "AAPL",
    },
    {
        name: "Netflix",
        type: "Stock",
        source: "Freetrade",
        marketCap: "high",
        date: new Date(),
        paid: 600,
        value: undefined,
        amount: 2,
        stockCode: "NFLX",
    }
]