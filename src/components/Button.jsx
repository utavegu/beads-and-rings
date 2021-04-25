import React from 'react';
import s from './Button.module.css';

export default function Button({type, children, isDisabled, onClick}) {
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
