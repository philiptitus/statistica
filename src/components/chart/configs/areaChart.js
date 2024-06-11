const areaChart = {
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
        width: "100%",
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
  
      colors: ["#00E396", "#0090FF"],
  
      fill: {
        type: 'solid',
        opacity: [0.5, 0.25],
      },
  
      dataLabels: {
        enabled: false,
      },
      
      stroke: {
        curve: "smooth",
        width: 2,
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
  
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  
  export default areaChart;
  