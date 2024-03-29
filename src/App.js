import React from 'react'

import { useState } from 'react';


function App() {

  const [calc, setCalc] = useState("")
  const [result, setRsult] = useState("")

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      // eslint-disable-next-line
      ops.includes(value) && calc === '' ||
     // eslint-disable-next-line
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) { return; }
    setCalc(calc + value)
    if (!ops.includes(value)) {
      // eslint-disable-next-line
      setRsult(eval(calc + value).toString())
    }
  }


  const createdigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++)
      digits.push(
        <button onClick={() => updateCalc(i.toString())}
          key={i}>{i}</button>
      )
    return digits;
  }

  const calculate = () => {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
  }
  const deleteLast = () => {
    // eslint-disable-next-line
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>

        </div>
        <div className="digits">
          {createdigits()}
          <button onClick={() => updateCalc('0')} >0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>

  );
}

export default App;
