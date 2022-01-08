import React, { Component, useState } from 'react';
import Button from './components/Button';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = ()=> {
    setCount(count + 1);
  }

  let decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <div className="count">
          <h3>Count: {count}</h3>
        </div>
        <div className="buttons">
          <Button title={"-"} action={decrementCount} classname={"Button"}/>
          <Button title={"+"} action={incrementCount} classname={"Button"}/>
        </div>
      </header>
    </div>
  );
}