import React from "react";

const NoChartData: React.FC<{ error: Error }> = ({ error }) => {
  return (
    <div className="h-[400px] w-full">
      <div className="flex justify-center items-center h-full">
        {error ? (
          <p className="text-lg text-red-500">
            {" "}
            Error in fetching Data, try again later{" "}
          </p>
        ) : (
          <p className="text-lg text-gray-500"> Add Coins to Compare </p>
        )}
      </div>
    </div>
  );
};

export default NoChartData;
