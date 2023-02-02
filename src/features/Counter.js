import React from 'react'
import { increament,decreament,increamentByAmount,reset } from './CounterSlice'
import { useSelector,useDispatch } from 'react-redux'
const Counter = () => {
const counterValues=useSelector((state)=>state.counterapp.count);
const dispatch=useDispatch();
console.log(counterValues);
  return (
    <div>
      <button onClick={()=>{dispatch(increament())}}>+</button>
      <p>{counterValues}</p>
      <button onClick={()=>{dispatch(decreament())}}>-</button>
      <br />
      <br />
      <button onClick={()=>{dispatch(increamentByAmount(10))}}>Add 10</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default Counter   
