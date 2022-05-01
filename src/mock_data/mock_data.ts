import { PurchaseType } from "../types/global";

export const mockPurchases: PurchaseType[] = [
    {
        name: "Apple",
        type: "Stock",
        source: "Freetrade",
        class: "High",
        date: new Date(),
        paid: 50,
        value: undefined,
        amount: 10,
        code: "AAPL",
    },
    {
        name: "Netflix",
        type: "Stock",
        source: "Freetrade",
        class: "High",
        date: new Date(),
        paid: 600,
        value: undefined,
        amount: 2,
        code: "NFLX",
    },
    {
        name: "Bitcoin",
        type: "Cryptocurrency",
        source: "Gemini",
        class: "BTC",
        date: new Date(),
        paid: 200,
        value: undefined,
        amount: 0.1,
        code: "BTC",
    }
]