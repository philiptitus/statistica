import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [20, 30, 25, 15, 10], // Example data: percentages for age groups
      options: {
        chart: {
          width: 380,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex] + '%';
          },
        },
        title: {
          text: 'Customer Age Distribution',
        },
        labels: ['18-24', '25-34', '35-44', '45-54', '55+'], // Age groups
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default DonutChart;
