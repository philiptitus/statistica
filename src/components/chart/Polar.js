import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PolarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [80, 65, 55, 45, 35, 25, 50, 70, 60], // Example data for satisfaction metrics
      options: {
        chart: {
          type: 'polarArea',
        },
        labels: ['NPS Q1', 'NPS Q2', 'NPS Q3', 'Service Rating Q1', 'Service Rating Q2', 'Service Rating Q3', 'Complaints Q1', 'Complaints Q2', 'Complaints Q3'],
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        title: {
          text: 'Customer Satisfaction Metrics',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PolarChart;
