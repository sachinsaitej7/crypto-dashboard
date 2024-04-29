import React from "react";
import { Typography } from "antd";
import useTrendingCoins from "@/hooks/useTrendingCoins";

const TopGainers: React.FC = () => {
  const { trendingCoins } = useTrendingCoins();

  return (
    <div className="rounded-3xl bg-white w-1/3">
      <Typography.Title level={3} className="p-8 pb-4">
        Top Gainers
      </Typography.Title>
      <div className="overflow-y-auto max-h-[400px] px-8">
        {trendingCoins?.map((coin: any) => (
          <div
            key={coin.item.id}
            className="p-4 mb-4 border shadow-sm rounded-3xl"
          >
            <div className="flex items-center gap-4">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-8 h-8 rounded-full"
              />
              <Typography.Text className="text-md font-semibold">
                {coin.item.name}
              </Typography.Text>
            </div>
            <div className="flex items-center gap-4">
              <Typography.Text className="text-md font-semibold">
                {coin.item.data.price.toFixed(2)}
              </Typography.Text>
              <Typography.Text
                className={`text-md font-semibold ${
                  coin.item.data.price_change_percentage_24h.usd > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGainers;
