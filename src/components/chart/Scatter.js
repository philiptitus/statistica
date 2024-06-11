import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ScatterChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Basic Plan",
          data: [
            [1, 300], [2, 290], [3, 310], [4, 320], [5, 330], [6, 340], [7, 350], [8, 360], [9, 370], [10, 380]
          ]
        },
        {
          name: "Premium Plan",
          data: [
            [1, 500], [2, 520], [3, 540], [4, 560], [5, 580], [6, 600], [7, 620], [8, 640], [9, 660], [10, 680]
          ]
        },
        {
          name: "Family Plan",
          data: [
            [1, 450], [2, 460], [3, 470], [4, 480], [5, 490], [6, 500], [7, 510], [8, 520], [9, 530], [10, 540]
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        title: {
          text: 'Service Plan Preferences',
          align: 'center'
        },
        xaxis: {
          title: {
            text: 'Month'
          },
          tickAmount: 10,
          labels: {
            formatter: function(val) {
              return parseFloat(val).toFixed(0)
            }
          }
        },
        yaxis: {
          title: {
            text: 'Number of Customers'
          },
          tickAmount: 7
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="scatter" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ScatterChart;
