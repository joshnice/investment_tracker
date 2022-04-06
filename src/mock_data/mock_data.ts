import { PurchaseTableType } from "../pages/purchase";

export const mockPurchases: PurchaseTableType[] = [{
        name: "Apple",
        type: "Stock",
        source: "Freetrade",
        class: "Low",
        date: new Date(),
        priceOfStockNow: 100,
        priceOfStockPurchase: 50,
        amount: 10,
    },
    {
        name: "Netflix",
        type: "Stock",
        source: "Freetrade",
        class: "Low",
        date: new Date(),
        priceOfStockNow: 500,
        priceOfStockPurchase: 600,
        amount: 2,
    }
]