import React from "react";
import { Drawer, Skeleton } from "antd";
import useCoinDataByID from "@/hooks/useCoinDataByID";

interface CoinDataDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

const CoinDataDrawer: React.FC<CoinDataDrawerProps> = ({
  id,
  open,
  onClose,
}) => {
  const { coin, isLoading, error } = useCoinDataByID(id);

  return (
    <Drawer
      title={
        <div className="flex gap-2 items-center">
          <img
            src={coin?.image.small}
            alt={coin?.name}
            className="w-5 h-5 rounded-full"
          />
          <span className="text-bold">{coin?.name}</span>
        </div>
      }
      placement="right"
      closable={true}
      open={open}
      onClose={onClose}
      width={350}
    >
      {isLoading ? (
        <Skeleton active />
      ) : error ? (
        <p className="text-red-500">Error in fetching Data, try again later</p>
      ) : (
        <div className="text-slate-700 flex flex-col gap-2">
          <p>Symbol: {coin?.symbol}</p>
          <p>Current Price: {coin?.market_data.current_price.usd}</p>
          <p>Market Cap: ${coin?.market_data.market_cap.usd}</p>
          <p>
            Price Change:{" "}
            {coin?.market_data.price_change_percentage_24h_in_currency.usd}
          </p>
        </div>
      )}
    </Drawer>
  );
};

export default CoinDataDrawer;
