import React from 'react';
import s from './Button.module.css';

export default function Button({type, children}) {
  return (
    <button className={s.button} type={type}>
      {children}
    </button>
  )
}
