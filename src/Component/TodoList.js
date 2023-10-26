import React, { useState } from 'react'

export default function TodoList() {
    const [inputValue, setInputValue]=useState('')
    const [data, setData]=useState('')
    const handleChange = (e) =>{
       setInputValue(e.target.value)
    }
    const handleClick = () =>{
        setData(inputValue)
    }
   
    const handleRemove = () =>{
        setData(" ")
    }
  return (
    <div>
        <h1>TODO LIST</h1>
        <h2>{data}</h2>
        <input type="Search" onChange={handleChange} className='input-field' /><br/>
        <button onClick={handleClick} className='add' >Add</button>
        <button onClick={handleRemove} className='btn'>Remove</button>
    </div>
  )
}
