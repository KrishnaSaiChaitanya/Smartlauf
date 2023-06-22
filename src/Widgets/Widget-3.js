import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Temparature", "Hours per Day"],
  ["Humidity", 11],
  ["Speed", 6],
];

const options = {
  title: "Pie Chart representation of data",
  chartArea: { width: "70%", height: "80%" },
};

export function Widget3() {
  return <Chart chartType="PieChart" data={data} width="100%" height="240px" />;
}
