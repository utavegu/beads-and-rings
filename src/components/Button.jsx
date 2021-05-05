import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({type, children, isDisabled, onClick}) {
  return (
    <button 
      className={s.button}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button;
