
// 三
let scale = 1;
let echartData = [
  {
    value: 2154,
    name: "标题一",
  },
  {
    value: 3854,
    name: "标题一",
  },
  {
    value: 3515,
    name: "标题一",
  },
  {
    value: 3515,
    name: "标题一",
  },
  {
    value: 3854,
    name: "标题一",
  },
  {
    value: 2154,
    name: "标题一",
  },
];
let rich = {
  yellow: {
    color: "#ffc72b",
    fontSize: 30 * scale,
    padding: [5, 4],
    align: "center",
  },
  total: {
    color: "#ffc72b",
    fontSize: 40 * scale,
    align: "center",
  },
  white: {
    color: "#fff",
    align: "center",
    fontSize: 14 * scale,
    padding: [21, 0],
  },
  blue: {
    color: "#49dff0",
    fontSize: 16 * scale,
    align: "center",
  },
  hr: {
    borderColor: "#0b5263",
    width: "100%",
    borderWidth: 1,
    height: 0,
  },
};
const options3 = {
  backgroundColor: "",
  title: {
    text: "大标题",
    left: "center",
    top: "53%",
    padding: [24, 0],
    textStyle: {
      color: "#fff",
      fontSize: 18 * scale,
      align: "center",
    },
  },
  legend: {
    selectedMode: false,
    formatter: function (name) {
      let total = 0; //各科正确率总和
      let averagePercent; //综合正确率
      echartData.forEach(function (value, index, array) {
        total += value.value;
      });
      return "{total|" + total + "}";
    },
    data: [echartData[0].name],
    // data: ['高等教育学'],
    // itemGap: 50,
    left: "center",
    top: "center",
    icon: "none",
    align: "center",
    textStyle: {
      color: "#fff",
      fontSize: 16 * scale,
      rich: rich,
    },
  },
  series: [
    {
      name: "总考生数量",
      type: "pie",
      radius: ["42%", "50%"],
      hoverAnimation: false,
      color: ["#c487ee", "#deb140", "#49dff0", "#034079", "#6f81da", "#00ffb4"],
      label: {
        normal: {
          formatter: function (params, ticket, callback) {
            let total = 0; //考生总数量
            let percent = 0; //考生占比
            echartData.forEach(function (value, index, array) {
              total += value.value;
            });
            percent = ((params.value / total) * 100).toFixed(1);
            return (
              "{white|" +
              params.name +
              "}\n{hr|}\n{yellow|" +
              params.value +
              "}\n{blue|" +
              percent +
              "%}"
            );
          },
          rich: rich,
        },
      },
      labelLine: {
        normal: {
          length: 55 * scale,
          length2: 0,
          lineStyle: {
            color: "#0b5263",
          },
        },
      },
      data: echartData,
    },
  ],
};

export default options3