

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import funnelChart from "./configs/funnelChart";

function FunnelChart() {
  const { Title, Paragraph } = Typography;

  return (
    <>
      <div className="funnelchart">
        <div>
          <Title level={5}>Recruitment Funnel</Title>
          <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>Stages of Recruitment</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={funnelChart.options}
        series={funnelChart.series}
        type="bar"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default FunnelChart;
