import './App.css';
import {useState, useEffect } from 'react'

function App() {
  return (
    <div className="Container">
      <div className="wrapper">
        <div className="screen"></div>
        <div className="btn light-gray" onClick={reset}> AC </div>
        <dive className="btn light-gray" onclick={percent}>%</dive>
        <dive className="btn light-gray" onclick={minusPlus}>+/-</dive>
        <dive className="btn orange" onclick={operatorType}>/</dive>
        <dive className="btn" onclick={inputNum}>7</dive>
        <dive className="btn" onclick={inputNum}>8</dive>
        <dive className="btn" onclick={inputNum}>9</dive>
        <dive className="btn orange" onclick={operatorType}>X</dive>
        <dive className="btn" onclick={inputNum}>4</dive>
        <dive className="btn" onclick={inputNum}>5</dive>
        <dive className="btn" onclick={inputNum}>6</dive>
        <dive className="btn orange" onclick={operatorType}>+</dive>
        <dive className="btn" onclick={inputNum}>1</dive>
        <dive className="btn" onclick={inputNum}>2</dive>
        <dive className="btn" onclick={inputNum}>3</dive>
        <dive className="btn orange" onclick={operatorType}>-</dive>
        <dive className="btn" onclick={inputNum}>0</dive>
        <dive className="btn" onclick={inputNum}>.</dive>
        <dive className="btn" onclick={equals}>=</dive>
      </div>
    </div>
  );
}

export default App;
