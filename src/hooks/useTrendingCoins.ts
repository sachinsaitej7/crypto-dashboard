import getTrendingCoins from "@/api/getTrendingCoins";
import useSWR from "swr";

export default function useTrendingCoins() {
    const { data, error, isLoading } = useSWR('trendingCoins', getTrendingCoins);

    return {
        trendingCoins: data?.coins,
        isLoading,
        error,
    };
}
