const options2 = {
  xAxis: {
    type: 'category',
    data: ['数据1', '数据1', '数据1', '数据1', '数据1', '数据1', '数据1']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

export default options2