import { stockAPIKey } from "./keys"

export async function getStockValue(stockCode: string) {
    return fetch(`https://financialmodelingprep.com/api/v3/quote-short/${stockCode}?apikey=${stockAPIKey}`)
    .then(async (res) => {
        return await res.json();
    });
}