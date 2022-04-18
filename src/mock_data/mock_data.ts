import { PurchaseType } from "../types/global";

export const mockPurchases: PurchaseType[] = [{
        name: "Apple",
        type: "Stock",
        source: "Freetrade",
        class: "high",
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
        class: "high",
        date: new Date(),
        paid: 600,
        value: undefined,
        amount: 2,
        code: "NFLX",
    }
]