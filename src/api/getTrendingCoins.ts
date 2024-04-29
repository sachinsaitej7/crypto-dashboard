import api from "@/network";
import { Coin } from "@/types";

interface TrendingCoinsResponse {
    coins: {
        item: Coin;
    }[];
}

async function getTrendingCoins(): Promise<TrendingCoinsResponse | undefined> {
    try {
        const response = await api.get('/search/trending');
        const data = response.data;
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

export default getTrendingCoins;