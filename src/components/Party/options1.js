const options1 = {
  xAxis: {
    type: "category",
    data: ["数据1", "数据1", "数据1", "数据1", "数据1", "数据1", "数据1"],
    splitLine: {
      //修改背景线条样式
      show: false, //是否展示
      lineStyle: {
        color: "#fff", //线条颜色
        type: "dashed", //线条样式，默认是实现，dashed是虚线
      },
    },
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    
      
    },
  ],
};

export default options1