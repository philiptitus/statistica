import React from 'react';
import ReactApexChart from 'react-apexcharts';

class HeatmapChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: data,
      options: {
        chart: {
          height: 450,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: colors,
        xaxis: {
          type: 'category',
          categories: ['Region 1', 'Region 2', 'Region 3', 'Region 4', 'Region 5', 'Region 6', 'Region 7', 'Region 8']
        },
        title: {
          text: 'Network Performance Metrics',
          align: 'center'
        },
        grid: {
          padding: {
            right: 20
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={450} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default HeatmapChart;

// Sample data and colors
const data = [{
  name: "Average Download Speed (Mbps)",
  data: [
    [0, 0, 50], [0, 1, 45], [0, 2, 55], [0, 3, 60], [0, 4, 70], [0, 5, 65], [0, 6, 80], [0, 7, 75]
  ]
}, {
  name: "Average Upload Speed (Mbps)",
  data: [
    [1, 0, 20], [1, 1, 25], [1, 2, 30], [1, 3, 35], [1, 4, 40], [1, 5, 45], [1, 6, 50], [1, 7, 55]
  ]
}, {
  name: "Network Coverage (%)",
  data: [
    [2, 0, 98], [2, 1, 95], [2, 2, 97], [2, 3, 99], [2, 4, 93], [2, 5, 94], [2, 6, 92], [2, 7, 96]
  ]
}, {
  name: "Number of Network Outages",
  data: [
    [3, 0, 1], [3, 1, 3], [3, 2, 2], [3, 3, 0], [3, 4, 4], [3, 5, 2], [3, 6, 1], [3, 7, 5]
  ]
}];

const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];
