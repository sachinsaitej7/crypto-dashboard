import api from "@/network";

interface CoinChartResponse {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}

export default async function getCoinChartDataRange(id: string, from: number, to: number): Promise<CoinChartResponse | undefined> {
    try {
        const response = await api.get(`/coins/${id}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`);
        const data = response.data;
        return data;
    }
    catch (error) {
        throw error;
    }
}