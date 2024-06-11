import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ComboChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Team B Range',
          type: 'rangeArea',
          data: [
            { x: 'Jan', y: [1100, 1900] },
            { x: 'Feb', y: [1200, 1800] },
            { x: 'Mar', y: [900, 2900] },
            { x: 'Apr', y: [1400, 2700] },
            { x: 'May', y: [2600, 3900] },
            { x: 'Jun', y: [500, 1700] },
            { x: 'Jul', y: [1900, 2300] },
            { x: 'Aug', y: [1000, 1500] },
          ],
        },
        {
          name: 'Team A Range',
          type: 'rangeArea',
          data: [
            { x: 'Jan', y: [3100, 3400] },
            { x: 'Feb', y: [4200, 5200] },
            { x: 'Mar', y: [3900, 4900] },
            { x: 'Apr', y: [3400, 3900] },
            { x: 'May', y: [5100, 5900] },
            { x: 'Jun', y: [5400, 6700] },
            { x: 'Jul', y: [4300, 4600] },
            { x: 'Aug', y: [2100, 2900] },
          ],
        },
        {
          name: 'Team B Median',
          type: 'line',
          data: [
            { x: 'Jan', y: 1500 },
            { x: 'Feb', y: 1700 },
            { x: 'Mar', y: 1900 },
            { x: 'Apr', y: 2200 },
            { x: 'May', y: 3000 },
            { x: 'Jun', y: 1000 },
            { x: 'Jul', y: 2100 },
            { x: 'Aug', y: 1200 },
            { x: 'Sep', y: 1800 },
            { x: 'Oct', y: 2000 },
          ],
        },
        {
          name: 'Team A Median',
          type: 'line',
          data: [
            { x: 'Jan', y: 3300 },
            { x: 'Feb', y: 4900 },
            { x: 'Mar', y: 4300 },
            { x: 'Apr', y: 3700 },
            { x: 'May', y: 5500 },
            { x: 'Jun', y: 5900 },
            { x: 'Jul', y: 4500 },
            { x: 'Aug', y: 2400 },
            { x: 'Sep', y: 2100 },
            { x: 'Oct', y: 1500 },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeArea',
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1000,
            },
          },
        },
        colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: [0.24, 0.24, 1, 1],
        },
        legend: {
          show: true,
          customLegendItems: ['Team B', 'Team A'],
          inverseOrder: true,
        },
        title: {
          text: 'Range Area with Forecast Line (Combo)',
          align: 'center',
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
        markers: {
          hover: {
            sizeOffset: 5,
          },
        },
        xaxis: {
          type: 'category',
          labels: {
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              colors: ['#333'],
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '14px',
              fontWeight: 'bold',
              colors: ['#333'],
            },
          },
        },
      },
      error: null,
    };
  }

  componentDidMount() {
    // You can perform any additional setup here
  }

  componentDidCatch(error, info) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <div>Oops! Something went wrong. Error: {error.message}</div>;
    }

    return (
      <div style={{ margin: 'auto', width: '80%', marginTop: '30px' }}>
        <ReactApexChart options={this.state.options} series={this.state.series} type="rangeArea" height={350} />
      </div>
    );
  }
}

export default ComboChart;
