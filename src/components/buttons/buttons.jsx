/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.PureComponent {
  render() {
    const { name, handleClick } = this.props;
    return (
      <button
        id={name === '0' ? 'zero' : ''}
        onClick={handleClick}
        type="button"
        className="keyboardBtn"
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
