import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class Slope extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: '5G Adoption Rate',
          data: [
            {
              x: '2023',
              y: 30,
            },
            {
              x: '2024',
              y: 45,
            },
          ],
        },
        {
          name: 'Investment in Network Infrastructure (in billion $)',
          data: [
            {
              x: '2023',
              y: 5,
            },
            {
              x: '2024',
              y: 8,
            },
          ],
        },
        {
          name: 'Number of Patents Filed',
          data: [
            {
              x: '2023',
              y: 15,
            },
            {
              x: '2024',
              y: 20,
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          width: 400,
          type: 'line',
        },
        plotOptions: {
          line: {
            isSlopeChart: true,
          },
        },
        title: {
          text: 'Technological Advancements Over Time',
          align: 'center'
        },
        xaxis: {
          title: {
            text: 'Year'
          }
        },
        yaxis: {
          title: {
            text: 'Values'
          }
        }
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} width={400} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default Slope;
