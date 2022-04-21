/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'React';
import PropTypes from 'prop-types';

export default class Buttons extends React.PureComponent {
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

Buttons.PropTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
