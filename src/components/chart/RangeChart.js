import React from 'react';
import ReactApexChart from 'react-apexcharts';

class Ranger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'Network Performance',
        data: [80, 70, 90, 60, 85, 75], // Example data points for each month
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Network Performance Over Time',
        },
        yaxis: {
          stepSize: 20,
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June'], // Example months
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Ranger;
