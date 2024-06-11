const funnelChart = {
  series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ],
  options: {
    chart: {
      width: "100%",
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
        isFunnel: true,
        borderRadius: 0,
      },
    },
    colors: [
      "#FF5733", // Color for 'Sourced'
      "#FF8D33", // Color for 'Screened'
      "#FFC300", // Color for 'Assessed'
      "#DAF7A6", // Color for 'HR Interview'
      "#33FF57", // Color for 'Technical'
      "#33FFBD", // Color for 'Verify'
      "#33D1FF", // Color for 'Offered'
      "#335BFF", // Color for 'Hired'
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return `${opt.w.globals.labels[opt.dataPointIndex]}: ${val}`;
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Recruitment Funnel',
      align: 'center',
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
          ],
        },
      },
      categories: [
        'Sourced',
        'Screened',
        'Assessed',
        'HR Interview',
        'Technical',
        'Verify',
        'Offered',
        'Hired',
      ],
    },
    legend: {
      show: false,
    },
  },
};

export default funnelChart;
