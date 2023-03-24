import React from "react";
import { Radar, XAxis, YAxis, Tooltip, Legend, PieChart } from "recharts";
const CandlestickChart = ({ data }: any) => {
  return (
    <PieChart width={800} height={400} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Radar dataKey="candle" />
    </PieChart>
  );
};

export default CandlestickChart;
