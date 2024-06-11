import React from 'react';
import ReactApexChart from 'react-apexcharts';
import moment from 'moment';

class RangeBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [
            {
              x: 'Plan A',
              y: [
                new Date('2023-01-01').getTime(),
                new Date('2023-03-01').getTime(),
              ],
              fillColor: '#008FFB',
            },
            {
              x: 'Plan B',
              y: [
                new Date('2023-02-01').getTime(),
                new Date('2023-04-01').getTime(),
              ],
              fillColor: '#00E396',
            },
            {
              x: 'Plan C',
              y: [
                new Date('2023-03-01').getTime(),
                new Date('2023-05-01').getTime(),
              ],
              fillColor: '#775DD0',
            },
            {
              x: 'Plan D',
              y: [
                new Date('2023-04-01').getTime(),
                new Date('2023-06-01').getTime(),
              ],
              fillColor: '#FEB019',
            },
            {
              x: 'Plan E',
              y: [
                new Date('2023-05-01').getTime(),
                new Date('2023-07-01').getTime(),
              ],
              fillColor: '#FF4560',
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false,
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            var label = opts.w.globals.labels[opts.dataPointIndex];
            var a = moment(val[0]);
            var b = moment(val[1]);
            var diff = b.diff(a, 'days');
            return label + ': ' + diff + (diff > 1 ? ' days' : ' day');
          },
          style: {
            colors: ['#f3f4f5', '#fff'],
          },
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          show: false,
        },
        grid: {
          row: {
            colors: ['#f3f4f5', '#fff'],
            opacity: 1,
          },
        },
        title: {
          text: 'Customer Migration Trends Between Plans',
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default RangeBarChart;
