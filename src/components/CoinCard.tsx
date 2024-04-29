import React from "react";
import { FaArrowTrendUp, FaArrowTrendDown, FaCircleDot } from "react-icons/fa6";
import { Coin } from "@/types";

interface Props {
  coin: Coin;
}

const CoinCard: React.FC<Props> = ({ coin }) => {
  return (
    <div className="rounded-3xl bg-white w-full h-full shadow-sm">
      <div className="flex items-center gap-2 p-4">
        <img
          src={coin.small}
          alt={coin.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{coin.name}</p>
          <FaCircleDot className="text-xs text-gray-200" />
          <p className="text-sm text-gray-500">{coin.symbol}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 pb-4">
        <p className="text-xl font-semibold">
          ~{new Intl.NumberFormat("en-US").format(coin.data.price)}
        </p>
        <p
          className={`text-sm font-semibold ${
            coin.data.price_change_percentage_24h.usd > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin.data.price_change_percentage_24h.usd > 0 ? (
            <FaArrowTrendUp className="inline mr-1 font-semibold" />
          ) : (
            <FaArrowTrendDown className="inline mr-1 font-semibold" />
          )}
          {coin.data.price_change_percentage_24h.usd.toFixed(1)}%
        </p>
      </div>
      <div className="h-[100px]">
        <img
          src={coin.data.sparkline}
          alt={coin.name}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default CoinCard;
