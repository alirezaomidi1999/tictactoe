import React,{useState} from 'react'
import './square.css'
function Square(props) {
   
    const clickHander = () =>{
  
     props.onClick()
     }
  return (
    <>
   <div className="square" onClick={() => clickHander()}>{props.value}</div>
    </>
  )
}

export default Square