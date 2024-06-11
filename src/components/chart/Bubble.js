import React from 'react';
import ReactApexChart from 'react-apexcharts';

class BubbleChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Popular Devices',
          data: generateData(new Date('01 Jan 2023 GMT').getTime(), 20, {
            min: 30,
            max: 100
          })
        },
        {
          name: 'Average Lifespan (months)',
          data: generateData(new Date('01 Jan 2023 GMT').getTime(), 20, {
            min: 12,
            max: 36
          })
        },
        {
          name: 'Upgrade Rates',
          data: generateData(new Date('01 Jan 2023 GMT').getTime(), 20, {
            min: 5,
            max: 25
          })
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'bubble',
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        title: {
          text: 'Device Statistics'
        },
        xaxis: {
          tickAmount: 12,
          type: 'category',
        },
        yaxis: {
          max: 120
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bubble" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default BubbleChart;

// Function to generate random data
function generateData(baseval, count, yrange) {
  let i = 0;
  let series = [];
  while (i < count) {
    const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push({ x, y, z });
    baseval += 86400000;
    i++;
  }
  return series;
}
