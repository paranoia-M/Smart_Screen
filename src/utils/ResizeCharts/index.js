const echartsDom = [];  //所有echarts图表的数组
/**
 * 当屏幕尺寸变化时，循环数组里的每一项调用resize方法来实现自适应。
 * @param {*} eDom 
 */
export function echartsResize(eDom) {   
    echartsDom.push(eDom);
    window.onresize = () => {
        echartsDom.forEach((it)=>{
            it.resize();
        })
    };
}

// echartsResize(chart)
