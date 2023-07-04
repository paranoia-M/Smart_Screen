import React, { useEffect, useState } from 'react'
import { getFiles } from '@/services/api/upload'
import {Button} from 'antd'
export default function Detail() {
  // const [count,setCount] = useState(0)
  const [data,setDate] = useState([])
  useEffect(() => {
      getData()
  },[])

  const getData =() => {
    getFiles().then(res => {
      console.log(res);
      setDate(res.data.fileList)
    })
  }
  console.log(83,process.env.REACT_APP_ENV) 
  console.log(data);
  return (
    <div>
      <Button>请求数据</Button>
      {data.map((item,index) => {
        return (
          <div key={index}>
            {item.name}
            <img src={item.url} alt="" />
          </div>
        )
      })}
    </div>
  )
}
