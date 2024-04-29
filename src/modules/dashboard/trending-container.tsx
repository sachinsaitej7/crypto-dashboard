import React from "react";
import { Skeleton } from "antd";

import TrendingCoin from "@/components/CoinCard";

import useTrendingCoins from "@/hooks/useTrendingCoins";

const TrendingContainer: React.FC = () => {
  const { trendingCoins, isLoading } = useTrendingCoins();

  if (isLoading) {
    return (
      <div className='grid grid-cols-4 gap-4 w-full p-8'>
        {[1, 2, 3, 4].map((index) => (
          <Skeleton key={index} active />
        ))}
      </div>
    );
  }

  return (
    <div className='grid grid-cols-4 gap-4 w-full p-8'>
      {trendingCoins?.slice(0, 4).map((coin: any) => (
        <TrendingCoin key={coin.item.id} coin={coin.item} />
      ))}
    </div>
  );
};

export default TrendingContainer;
