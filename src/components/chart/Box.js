import React from 'react';
import ReactApexChart from 'react-apexcharts';

class BoxChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          type: 'boxPlot',
          data: [
            {
              x: '2015',
              y: [54, 66, 69, 75, 88] // Example data usage values in MB
            },
            {
              x: '2016',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: '2017',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: '2018',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: '2019',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: '2020',
              y: [41, 49, 58, 61, 67]
            },
            {
              x: '2021',
              y: [54, 59, 66, 71, 88]
            }
          ]
        }
      ],
      options: {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Average Data Usage per Customer',
          align: 'left'
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#5C4742',
              lower: '#A5978B'
            }
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="boxPlot" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default BoxChart;
