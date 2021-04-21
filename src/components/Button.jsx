import React from 'react';
import s from './Button.module.css';

export default function Button({type, children, isDisabled}) {
  return (
    <button 
      className={s.button}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
