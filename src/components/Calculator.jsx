/* eslint-disable import/no-duplicates */
import React from 'react';
import './calculator.css';
import './buttons/button';
import calculate from './calculator/logic/calculate';
import Buttons from './buttons/button';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: { total: null, next: null, operation: null },
      display: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttons = [
      'Ac',
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
  }

  handleDisplayState(beforeCalObj, afterCalcObj) {
    // handle display UI state
    if (!afterCalcObj.operation && !afterCalcObj.next && afterCalcObj.total) {
      this.setState({ display: afterCalcObj.total });
    } else if (beforeCalObj.operation && afterCalcObj.next) {
      this.setState({ display: afterCalcObj.next });
    } else if (afterCalcObj.total && afterCalcObj.operation) {
      this.setState({ display: afterCalcObj.total });
    } else if (!afterCalcObj.operation) {
      this.setState({ display: afterCalcObj.next });
    } else {
      this.setState({ display: 0 });
    }
  }

  handleClick(e) {
    const { calcObj } = this.state;
    const newCalcObj = calculate(calcObj, e.target.innerText);
    this.setState({ calcObj: newCalcObj });
    this.handleDisplayState(calcObj, newCalcObj);
  }

  render() {
    const { display, calcObj } = this.state;
    return (
      <div className="calculator">
        <div className="display">{display ?? calcObj.next ?? 0}</div>
        <div className="keyboard">
          <div className="keyboard-row">
            {this.buttons.slice(0, 4).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(4, 8).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(8, 12).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(12, 16).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(16, 19).map((btn) => (
              <Buttons key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
