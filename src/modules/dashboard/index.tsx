import React from "react";

import ChartContainer from "./chart-container";
import TopGainers from "./top-gainers";
import TrendingContainer from "./trending-container";
import DashBoardProvider from "@/providers/DashBoardProvider";

const DashBoard: React.FC = () => {
  return (
    <DashBoardProvider>
      <div className='pb-16'>
        <TrendingContainer />

        <div className='flex items-stretch gap-8 justify-between px-8 w-full'>
          <ChartContainer />
          <TopGainers />
        </div>
      </div>
    </DashBoardProvider>
  );
};

export default DashBoard;
