import React from "react";
import { FaChartLine, FaWallet } from "react-icons/fa";
import { BsCurrencyExchange } from "react-icons/bs";
import { Typography } from "antd";

import Logo from "./Logo";
import { Avatar } from "antd";

const TopNavBar: React.FC<{ onChange: (val: string) => void }> = ({
  onChange,
}) => {
  return (
    <div className="flex justify-between items-center px-12 pt-6 pb-10 shadow-xl">
      <Logo />
      <div className="flex gap-8 font-medium ml-[-5%]">
        <div
          className="flex gap-2 items-center text-red-500 cursor-pointer"
          onClick={() => onChange("dashboard")}
        >
          <FaChartLine />
          <Typography.Text className="text-red-500 text-lg">
            TMarket
          </Typography.Text>
        </div>
        <div
          className="flex items-center gap-2 text-slate-500 cursor-pointer"
          onClick={() => onChange("exchange")}
        >
          <BsCurrencyExchange />
          <Typography.Text className="text-lg">Exchange</Typography.Text>
        </div>
        <div
          className="flex items-center gap-2 text-slate-500 cursor-pointer"
          onClick={() => onChange("setting")}
        >
          <FaWallet />
          <Typography.Text className="text-lg">Settings</Typography.Text>
        </div>
      </div>
      <div className="cursor-pointer">
        <Avatar
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          size={42}
          className="border border-red-500"
        />
      </div>
    </div>
  );
};

export default TopNavBar;
