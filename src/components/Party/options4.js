// 四
const options4  = {
  backgroundColor: "",
  color: [
    "#63caff",
    "#49beff",
    "#03387a",
    "#03387a",
    "#03387a",
    "#6c93ee",
    "#a9abff",
    "#f7a23f",
    "#27bae7",
    "#ff6d9d",
    "#cb79ff",

  ],
  grid: {
    // containLabel: true,
    // left: 10,
    // right: 10,
    // bottom: 50,
    // top: 20,
  },
  xAxis: {
    axisLabel: {
      color: "#c0c3cd",
      fontSize: 14,
      interval: 0,
    },
    axisTick: {
      lineStyle: {
        color: "#384267",
      },
      show: true,
    },
    splitLine: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#384267",
        width: 1,
        type: "dashed",
      },
      show: true,
    },
    data: [
      "0点~2点",
      "3点~5点",
      "6点~8点",
      "0点~2点",
      "3点~5点",
    ],
    type: "category",
  },
  yAxis: {
    axisLabel: {
      color: "#c0c3cd",
      fontSize: 14,
    },
    axisTick: {
      lineStyle: {
        color: "#384267",
        width: 1,
      },
      show: true,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#384267",
        type: "dashed",
      },
    },
    axisLine: {
      lineStyle: {
        color: "#384267",
        width: 1,
        type: "dashed",
      },
      show: true,
    },
    name: "",
  },
  series: [
    {
      data: [200, 85, 112, 275, 305, 415, 741, 405],
      type: "bar",
      barMaxWidth: "auto",
      barWidth: 30,
      itemStyle: {
        color: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          type: "linear",
          global: false,
          colorStops: [
            {
              offset: 0,
              color: "#0b9eff",
            },
            {
              offset: 1,
              color: "#63caff",
            },
          ],
        },
      },
      label: {
        show: true,
        position: "top",
        distance: 10,
        color: "#fff",
      },
   
    },
    {
      data: [1, 1, 1, 1, 1, 1, 1, 1],
      type: "pictorialBar",
      barMaxWidth: "20",
      symbol: "diamond",
      symbolOffset: [0, "50%"],
      symbolSize: [30, 15],
    },
    {
      data: [200, 85, 112, 275, 305, 415, 741, 405],
      type: "pictorialBar",
      barMaxWidth: "20",
      symbolPosition: "end",
      symbol: "diamond",
      symbolOffset: [0, "-50%"],
      symbolSize: [30, 12],
      zlevel: 2,
    },
    {
      data: [741, 741, 741, 741, 741, 741, 741, 741],
      type: "bar",
      barMaxWidth: "auto",
      barWidth: 30,
      barGap: "-100%",
      zlevel: -1,
    },
    {
      data: [1, 1, 1, 1, 1, 1, 1, 1],
      type: "pictorialBar",
      barMaxWidth: "20",
      symbol: "diamond",
      symbolOffset: [0, "50%"],
      symbolSize: [30, 15],
      zlevel: -2,
    },
  
  ],
  tooltip: {
    trigger: "axis",
    show: false,
  },
};

export default options4