// components/GradientDonutChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import gradientDonutChart from "./configs/gradientDonutChart";

function GradientDonutChart() {
  const { Title } = Typography;

  return (
    <>
      <div className="donutchart">
        <div>
          <Title level={5}>Sales Distribution</Title>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={gradientDonutChart.options}
        series={gradientDonutChart.series}
        type="donut"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default GradientDonutChart;
