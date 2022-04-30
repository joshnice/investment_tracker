import { StockPrice } from "../types/stock";
import { stockAPIKey } from "./keys"


export async function getStockPrices(stockCodes: string[]): Promise<StockPrice[]> {

    const stockPrices: StockPrice[] = [];

    for await (const stock of stockCodes) {
        const price = await getStockPrice(stock);
        stockPrices.push({ code: stock, price })
    }

    return stockPrices;
}

async function getStockPrice(stockCode: string): Promise<number> {
    const stock = await getStock(stockCode);
    return stock[0].price; 
}

async function getStock(stockCode: string) {
    return fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockCode}?apikey=${stockAPIKey}`)
    .then(async (res) => {
        const response = await res.json();
        return response;
    }); 
}

export async function isStockValid(stockCode: string) {
    const stock = await getStock(stockCode);
    return stock.length > 0;
}