import React from "react";

import CoinTab from "./CoinTab";

import AutoCompleteCoinSearch from "./AutoCompleteCoinSearch";
import { useDashBoard } from "@/providers/DashBoardProvider";
import ColorService from "@/services/colorService";



const Compare: React.FC<{colorService: ColorService}> = ({colorService}) => {
  const { coins, removeCoin, idMapCoinData } = useDashBoard();

  return (
    <div className='flex flex-wrap gap-2 p-4 pb-0 items-center'>
      {coins.map((coin) => (
        <CoinTab
          key={coin}
          data={idMapCoinData[coin]}
          onRemove={() => {
            removeCoin(coin);
          }}
          color={colorService.getColor(coin)}
        />
      ))}
      <AutoCompleteCoinSearch />
    </div>
  );
};

export default Compare;
