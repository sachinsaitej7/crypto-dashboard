import searchCoins, { SearchCoinsResponse } from "@/api/searchCoins";

import useSWR from "swr";

export default function useSearchCoins(query: string) {

    const { data, error, isLoading } = useSWR<SearchCoinsResponse>(query ? `search-coins-${query}` : null, () => searchCoins(query));

    return {
        coins: data?.coins,
        isLoading,
        error,
    };
}