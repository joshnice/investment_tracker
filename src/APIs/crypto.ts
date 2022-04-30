import { CryptoPrice } from "../types/crypto";
import { cryptoAPIKey } from "./keys";

export async function getCryptoPrices(cryptoCodes: string[]) {

    const cryptoPrices: CryptoPrice[] = [];

    for await (const crypto of cryptoCodes) {
        const price = await getCryptoPrice(crypto);
        cryptoPrices.push({ code: crypto, price })
    }

    return cryptoPrices;

}

async function getCryptoPrice(code: string) {
    const cryptoData = await getCrypto(code);
    return Number(parseFloat(cryptoData[0].price_usd).toFixed(2));
}

async function getCrypto(code: string) {
    return fetch(`https://rest.coinapi.io/v1/assets/${code}`, { headers: { "X-CoinAPI-Key": cryptoAPIKey } })
    .then(async (res) => {
        const response = await res.json();
        return response;
    });
}

export async function isCryptoCodeValid(code: string) {
    const isValid = await getCrypto(code);
    return isValid.length > 0;
}