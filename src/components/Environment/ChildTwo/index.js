import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';
import cityData from './data'
import { Button, Card } from 'antd';
import './index.css'
import { div } from 'zrender/lib/core/vector';

export default function index() {
  const [data, setData] = useState([])
  const [arr, setArr] = useState([])
  const [allData, setAllData] = useState([])
  
  const [cityAct,setCityAct]  = useState(1)
  useEffect(() => {
    setAllData(cityData)
    asyncFetch();
    setData(cityData[0].data)
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => setArr(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  console.log(8373, arr);
  
  const config = {
    data,
    xField: 'x',
    yField: 'y',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => {
          return v
        },
        style: {
          fontSize:18
        }
      },
    
    },
    xAxis: {
      label: {
        style: {
          fontSize:18
        }
      }
    },
    legend: {
      data,
      position: 'top',
     
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  const handleClick = (val) => {
    console.log(val);
    setCityAct(val.id)
    setData(val.data)
  }
  return (
     
    < >
    <div className={'ce_dian'}>
        {allData.map((item, index) => {
          return (
            <Button  key={index} className={cityAct == item.id ? 'ce_dian_list city_act' : 'ce_dian_list'} onClick={() => handleClick(item)}>
              {item.city}
            </Button>
          )
        })}
      </div>

      <Line style={{height:'420px'}} className='chart_style' {...config} />
    </>
  )
}
