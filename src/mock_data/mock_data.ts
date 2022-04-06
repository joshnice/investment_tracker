import { PurchaseTableType } from "../pages/purchase";

export const mockPurchases: PurchaseTableType[] = [{
        name: "Apple",
        type: "Stock",
        source: "Freetrade",
        class: "Low",
        date: new Date(),
        paid: 50,
        value: 100,
        amount: 10,
    },
    {
        name: "Netflix",
        type: "Stock",
        source: "Freetrade",
        class: "Low",
        date: new Date(),
        paid: 600,
        value: 500,
        amount: 2,
    }
]