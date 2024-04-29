import { renderToString } from "react-dom/server";

export function toolTipFormatter(params: any) {
  return renderToString(
    <div className="p-4 grid grid-cols-1 gap-2">
      {params.map((param: any) => {
        return (
          <div
            key={param.dataIndex}
            className="flex items-center justify-between gap-2"
          >
            <div className="font-semibold">
              <span
                className="w-1/2 h-1/2 rounded-full px-1"
                style={{ backgroundColor: param.color }}
              >

              </span>
              {param.seriesName}
            </div>
            <div className="text-md font-semibold">
              {param.data[1].toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>,
  );
}
