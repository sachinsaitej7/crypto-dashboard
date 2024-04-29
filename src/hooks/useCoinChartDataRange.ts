import getCoinChartDataRange from "@/api/getCoinChartDataRange";


import useSWR from "swr";

export default function useCoinChartDataRange(ids: string[], from: number, to: number) {
    const { data, error, isLoading } = useSWR(ids ? `coins-${ids.join()}-${from}-${to}` : null, () => {
        return Promise.all(ids.map(id => getCoinChartDataRange(id, from, to)));
    });

    return {
        data,
        isLoading,
        error,
    };
}