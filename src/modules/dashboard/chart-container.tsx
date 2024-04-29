import React from "react";

import { Divider } from "antd";
import AddCompare from "@/components/AddCompare";
import Chart from "@/components/Chart";
import ColorService from "@/services/colorService";

const CS = new ColorService();

const ChartContainer: React.FC = () => {
  return (
    <div className="rounded-3xl bg-white w-2/3 shadow-sm">
      <AddCompare colorService={CS} />
      <Divider className="my-4" />
      <div className="p-4 pt-2">
        <Chart colorService={CS} />
      </div>
    </div>
  );
};

export default ChartContainer;
