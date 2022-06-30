import React from 'react';
import {useState} from 'react';

const Incdec =(props)=>{
    const [count,setCount] =useState(0);
    return(
      <div>
        <h1>count:{count} </h1>
        <button onClick={()=>{setCount(count+1)}}>Increment </button>
        <button onClick={()=>{setCount(count-1)}}>Decrement </button>
        <button onClick={()=>{setCount(0)}}>Reset </button>
        </div>
    )
  }
  
  export default Incdec; 