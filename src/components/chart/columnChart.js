

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import columnChart from "./configs/columnChart";

function ColumnChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="columnchart">
        <div>
          <Title level={5}>Active Users</Title>
          <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Traffic</li>
            <li>{<MinusOutlined />} Sales</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={columnChart.options}
        series={columnChart.series}
        type="bar"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default ColumnChart;
