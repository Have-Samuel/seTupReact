import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <table className="calculator">
        <tr className="calculator-Row">
          <td className="calculator">
            <input type="text" className="result" disabled value="0" />
          </td>
        </tr>
        <tr className="calculator__row">
          <td className="calculator__column calculator__column--main">
            <input type="button" className="operator" value="AC" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="operator" value="+/-" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="operator" value="%" />
          </td>
          <td className="calculator__column calculator__column--side">
            <input type="button" className="operator" value="÷" />
          </td>
        </tr>
        <tr className="calculator__row">
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="7" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="8" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="9" />
          </td>
          <td className="calculator__column calculator__column--side">
            <input type="button" className="operator" value="x" />
          </td>
        </tr>
        <tr className="calculator__row">
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="4" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="5" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="6" />
          </td>
          <td className="calculator__column calculator__column--side">
            <input type="button" className="operator" value="-" />
          </td>
        </tr>
        <tr className="calculator__row">
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="1" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="2" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="3" />
          </td>
          <td className="calculator__column calculator__column--side">
            <input type="button" className="operator" value="+" />
          </td>
        </tr>
        <tr className="calculator__row">
          <td className="calculator__column calculator__column--main" colSpan="2">
            <input type="button" className="number" value="0" />
          </td>
          <td className="calculator__column calculator__column--main">
            <input type="button" className="number" value="." />
          </td>
          <td className="calculator__column calculator__column--side">
            <input type="button" className="operator" value="=" />
          </td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
