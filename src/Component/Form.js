import React, { useState } from 'react';

export default function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) =>{
  setInputValue(e.target.value);
  }
  const handleSubmit = () => {
    if (inputValue === '') {
      setInputValue("Please Enter a value");
    } else {
      setInputValue('');
      alert("Name: " + inputValue);
    }
  }

  return (
    <div>
      <h1>Input Validation</h1>
      <h2>{inputValue}</h2>
      <label>Name:</label>
      <input
        type='text' 
        placeholder='Enter the name'
        value={inputValue} 
        onChange={handleChange}
        className='input'
      />
      <button onClick={handleSubmit} className='form-button'>Submit</button> 
    </div>
  );
}
