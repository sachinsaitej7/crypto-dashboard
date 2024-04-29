import api from "@/network";
import { Coin } from "@/types";

export interface SearchCoinsResponse {
    coins: Coin[];
}

export default async function searchCoins(query: string) {
    try {
        const response = await api.get(`/search?query=${query}`);
        const data = response.data;
        return data;
    }
    catch (error) {
        throw error;
    }
}
