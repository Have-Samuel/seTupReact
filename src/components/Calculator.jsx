import React from 'react';
import './calculator.css';
import calculate from './calculator/logic/calculate';
import Button from './buttons/buttons';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calObj: { total: null, next: null, operation: null },
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

  handleDisplayState(beforeCalObj, afterCalObj) {
    // handle display UI state
    if (!afterCalObj.operation && !afterCalObj.next && afterCalObj.total) {
      this.setState({ display: afterCalObj.total });
    } else if (beforeCalObj.operation && afterCalObj.next) {
      this.setState({ display: afterCalObj.next });
    } else if (afterCalObj.total && afterCalObj.operation) {
      this.setState({ display: afterCalObj.total });
    } else if (!afterCalObj.operation) {
      this.setState({ display: afterCalObj.next });
    } else {
      this.setState({ display: 0 });
    }
  }

  handleClick(e) {
    const { calObj } = this.state;
    const newCalObj = calculate(calObj, e.target.innerText);
    this.setState({ calObj: newCalObj });
    this.handleDisplayState(calObj, newCalObj);
  }

  render() {
    const { display, calObj } = this.state;
    return (
      <div className="calculator">
        <div className="display">
          {display ?? calObj.next ?? 0}
        </div>
        <div className="keyboard">
          <div className="keyboard-row">
            {this.buttons.slice(0, 4).map((btn) => (
              <Button key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(4, 8).map((btn) => (
              <Button key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(8, 12).map((btn) => (
              <Button key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(12, 16).map((btn) => (
              <Button key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
          <div className="keyboard-row">
            {this.buttons.slice(16, 19).map((btn) => (
              <Button key={btn} name={btn} handleClick={this.handleClick} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
