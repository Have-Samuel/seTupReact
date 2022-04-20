/* eslint-disable indent */
import React from 'react';

import './calculator.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="display">0</div>
        <div className="keyboard">
          <div className="keyboard-row">
            <button type="button" className="keyboardBtn">
              AC
            </button>
            <button type="button" className="keyboardBtn">
              +/-
            </button>
            <button type="button" className="keyboardBtn">
              %
            </button>
            <button type="button" className="keyboardBtn">
              &divide;
            </button>
          </div>
          <div className="keyboard-row">
            <button type="button" className="keyboardBtn">
              7
            </button>
            <button type="button" className="keyboardBtn">
              8
            </button>
            <button type="button" className="keyboardBtn">
              9
            </button>
            <button type="button" className="keyboardBtn">
              &times;
            </button>
          </div>
          <div className="keyboard-row">
            <button type="button" className="keyboardBtn">
              4
            </button>
            <button type="button" className="keyboardBtn">
              5
            </button>
            <button type="button" className="keyboardBtn">
              6
            </button>
            <button type="button" className="keyboardBtn">
              -
            </button>
          </div>
          <div className="keyboard-row">
            <button type="button" className="keyboardBtn">
              1
            </button>
            <button type="button" className="keyboardBtn">
              2
            </button>
            <button type="button" className="keyboardBtn">
              3
            </button>
            <button type="button" className="keyboardBtn">
              +
            </button>
          </div>
          <div className="keyboard-row">
            <button
              id="null"
              type="button"
              className="keyboardBtn"
            >
              0
            </button>
            <button type="button" className="keyboardBtn">
              .
            </button>
            <button type="button" className="keyboardBtn">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
