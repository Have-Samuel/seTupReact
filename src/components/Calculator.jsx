import React, { useState } from 'react';
import './calculator.css';
import calculate from './calculator/logic/calculate';
import Button from './buttons/buttons';

const Calculator = () => {
  const [calObj, setCalObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState(null);

  const buttons = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const handleDisplayState = (beforeCalObj, afterCalObj) => {
    // Display of UI state
    if (!afterCalObj.operation && !afterCalObj.next && afterCalObj.total) {
      setDisplay(afterCalObj.total);
    } else if (beforeCalObj.operation && afterCalObj.next) {
      setDisplay(afterCalObj.next);
    } else if (afterCalObj.total && afterCalObj.operation) {
      setDisplay(afterCalObj.total);
    } else if (!afterCalObj.operation) {
      setDisplay(afterCalObj.next);
    } else {
      setDisplay(0);
    }
  };

  const handleClick = (e) => {
    const newCalObj = calculate(calObj, e.target.innerText);
    setCalObj(newCalObj);
    handleDisplayState(calObj, newCalObj);
  };

  return (
    <div className="calculator">
      <div className="display">{display ?? calObj.next ?? 0}</div>
      <div className="keyboard">
        <div className="keyboard-row">
          {buttons.slice(0, 4).map((btn) => (
            <Button key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="keyboard-row">
          {buttons.slice(4, 8).map((btn) => (
            <Button key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="keyboard-row">
          {buttons.slice(8, 12).map((btn) => (
            <Button key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="keyboard-row">
          {buttons.slice(12, 16).map((btn) => (
            <Button key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
        <div className="keyboard-row">
          {buttons.slice(16, 19).map((btn) => (
            <Button key={btn} name={btn} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
