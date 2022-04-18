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

export async function getCryptoPrice(code: string) {
    return fetch(`https://rest.coinapi.io/v1/assets/${code}`, { headers: { "X-CoinAPI-Key": cryptoAPIKey } })
    .then(async (res) => {
        const response = await res.json();
        return Number(parseFloat(response[0].price_usd).toFixed(2));
    });
}