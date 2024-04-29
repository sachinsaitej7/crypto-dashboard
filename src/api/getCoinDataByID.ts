import api from "@/network";

interface CoinDataResponse {
    id: string;
    name: string;
    symbol: string;
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    market_data: {
        current_price: {
            usd: number;
        };
        market_cap: {
            usd: number;
        };
        price_change_percentage_24h_in_currency: {
            usd: number;
        };
    };

}

async function getCoinDataByID(id: string): Promise<CoinDataResponse | undefined> {
    try {
        const response = await api.get(`/coins/${id}`);
        const data = response.data;
        return data;
    }
    catch (error) {
        throw error;
    }
}

export default getCoinDataByID;