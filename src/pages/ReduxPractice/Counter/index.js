import { Row,Button, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react'

import {   
  decrement,
  incrementByAmount,
  increment,
  incrementAsync,
  selectCount,} from '@/store/reducers/Counter'

export default function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount,setIncrementAmount] = useState('2')
  const incrementValue = Number(incrementAmount) || 0;
  useEffect(() => {
    getData()
  },[])
  const getData = () => {
    // console.log(3,dispatch(decrement(incrementAsync)));
  }
  console.log(1,incrementAmount);
  const handleClick = () => {
    console.log(93399)
  }
  return (
   <div>
     <Row>
      <Button  onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick = {() => {handleClick()}}>Increment</Button>
      <Button  onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</Button>
      <Button >Add Async</Button>
      <Button>Add If Odd</Button>
    </Row>
    <Row>
      <Input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}></Input>
    </Row>
   </div>
  )
}
