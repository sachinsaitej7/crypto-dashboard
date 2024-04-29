import getCoinDataByID from "@/api/getCoinDataByID";
import useSWR from "swr";

export default function useCoinDataByID(id: string) {

    const { data, error, isLoading } = useSWR(id ? `coin-${id}` : null, () => getCoinDataByID(id));

    return {
        coin: data,
        isLoading,
        error,
    };
}