const columnChart = {
    series: [
      {
        name: "Mobile apps",
        data: [420, 300, 450, 320, 600, 350, 500, 330, 600],
      },
      {
        name: "Websites",
        data: [50, 130, 70, 180, 350, 370, 400, 280, 450],
      },
    ],
  
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
  
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
  
      dataLabels: {
        enabled: false,
      },
  
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
  
      yaxis: {
        labels: {
          style: {
            fontSize: "14px",
            fontWeight: 600,
            colors: ["#8c8c8c"],
          },
        },
      },
  
      xaxis: {
        labels: {
          style: {
            fontSize: "14px",
            fontWeight: 600,
            colors: [
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
              "#8c8c8c",
            ],
          },
        },
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
  
      fill: {
        opacity: 1,
      },
  
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  
  export default columnChart;
  