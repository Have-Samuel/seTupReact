import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, handleClick }) => (
  <button
    id={name === '0' ? 'zero' : ''}
    onClick={handleClick}
    type="button"
    className="keyboardBtn"
  >
    {name}
  </button>
);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
