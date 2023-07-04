import React, { useEffect } from 'react'
import './index.css'
import { getCurWeather } from '@/services'
export default function index() {

  useEffect(() => {
    getCurWeather().then((res) => {
      console.log(3982,res.data);
    })
  },[])
  return (
    <div className='one'>
      {/* <div className='one_top'>
        <p className='one_top_tit'>略阳县空气质量</p>
        </div>
      <div className='one_top'>
        <div className='one_top_left'>当天天气</div>
        <div className='one_top_right'>空气质量</div>
      </div>
      <div className='one_bottom'>
        七天空气指标
      </div> */}
    </div>
  )
}
