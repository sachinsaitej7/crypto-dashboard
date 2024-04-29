import React, { useCallback, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import LineChart from "./LineChart";
import ColorService from "@/services/colorService";
import { getTimePeriod } from "@/services/timePeriod";
import CoinDataDrawer from "./CoinDataDrawer";

const defaultLabel = "1W";

const Chart: React.FC<{ colorService: ColorService }> = ({ colorService }) => {
  const [currentCoin, setCurrentCoin] = useState<string>();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const [timePeriod, setTimePeriod] = useState(() =>
    getTimePeriod(defaultLabel),
  );

  const onChange = (e: RadioChangeEvent) => {
    setTimePeriod(getTimePeriod(e.target.value));
  };

  const onChartClick = useCallback((coin: string) => {
    setCurrentCoin(coin);
    setDrawerVisible(true);
  }, []);

  const onDrawerClose = useCallback(() => {
    setDrawerVisible(false);
  }, []);

  return (
    <div>
      <div className="flex justify-end w-full">
        <Radio.Group
          defaultValue={defaultLabel}
          buttonStyle="solid"
          onChange={onChange}
        >
          <Radio.Button value="1D">1D</Radio.Button>
          <Radio.Button value="1W">1W</Radio.Button>
          <Radio.Button value="1M">1M</Radio.Button>
          <Radio.Button value="6M">6M</Radio.Button>
          <Radio.Button value="1Y">1Y</Radio.Button>
        </Radio.Group>
      </div>
      <LineChart
        colorService={colorService}
        timePeriod={timePeriod}
        onChartClick={onChartClick}
      />
      <CoinDataDrawer
        open={drawerVisible}
        id={currentCoin || ""}
        onClose={onDrawerClose}
      />
    </div>
  );
};

export default Chart;
