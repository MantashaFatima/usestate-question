import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] =useState(0)
    const handleIncre =() =>{
        setCounter(counter + 1);

    }
    const handleDec =()=>{
        setCounter ( counter - 1);

    }
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={handleIncre} className='btn'>Increment</button>
        <button onClick={handleDec} className='btn'>Decrement</button>
    </div>
  )
}
