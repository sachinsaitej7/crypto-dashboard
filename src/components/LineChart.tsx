import React from "react";
import ReactECharts from "echarts-for-react";
import { useDashBoard } from "@/providers/DashBoardProvider";
import useCoinChartDataRange from "@/hooks/useCoinChartDataRange";
import moment from "moment";
import ColorService from "@/services/colorService";
import NoChartData from "./NoChartData";

interface LineChartProps {
  colorService: ColorService;
  timePeriod: {
    startDate: number;
    endDate: number;
  };
  onChartClick: (id: string) => void;
}

const LineChart: React.FC<LineChartProps> = ({
  colorService,
  timePeriod,
  onChartClick,
}) => {
  const { coins, idMapCoinData } = useDashBoard();
  const { data, isLoading, error } = useCoinChartDataRange(
    coins,
    timePeriod.startDate,
    timePeriod.endDate,
  );

  const availableData = data?.filter(Boolean) || [];

  if (availableData?.length === 0 && !isLoading)
    return <NoChartData error={error} />;

  return (
    <ReactECharts
      option={{
        grid: {
          left: "3%",
          right: "3%",
          bottom: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          show: true,
          valueFormatter: (value: number) => "$" + value,
        },
        xAxis: {
          type: "time",
          axisLabel: {
            formatter: function (value: number) {
              return moment(value).format("DD MMM YYYY");
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: function (value: any) {
              return "$" + value;
            },
          },
        },
        series: availableData.map((d, index) => {
          return {
            id: coins[index],
            data: d?.prices,
            type: "line",
            smooth: true,
            name: idMapCoinData[coins[index]]?.name,
            showSymbol: false,
            legendHoverLink: true,

            lineStyle: {
              width: 2.5,
            },
            color: colorService.getColor(coins[index]),
          };
        }),
        legend: {
          type: "scroll",
          show: true,
          bottom: "0%",
        },
      }}
      style={{ height: "400px", width: "100%" }}
      notMerge={true}
      lazyUpdate={true}
      showLoading={isLoading}
      onEvents={{
        click: (params: { seriesId: string }) => {
          onChartClick(params.seriesId);
        },
      }}
    />
  );
};

export default React.memo(LineChart);
