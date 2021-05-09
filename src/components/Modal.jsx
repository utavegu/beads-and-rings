import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({active, setActive, children}) {
  const closeModalButton = React.useRef(null);

  const handleFocus = () => {
    closeModalButton.current.focus();
  }

  const closeModal = (evt) => {
    if (evt.key === "Escape" || evt.key === "Esc") setActive(false);
  }

  useEffect(() => {
    document.addEventListener("keydown", closeModal, false);
    return () => {
      document.removeEventListener("keydown", closeModal, false);
    }
  }, []);

  return (
    <div
      className={active ? `${s.overlay} ${s.active}` : `${s.overlay}`}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
        onClick={evt => evt.stopPropagation()}
      >
        <span onFocus={handleFocus} tabIndex="0" aria-hidden="true"></span>
        <button className={s.close_modal_button} onClick={() => setActive(false)} ref={closeModalButton}>Х</button>
          {children}
        <span onFocus={handleFocus} tabIndex="0" aria-hidden="true"></span>
      </div>
    </div>
  )
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}

export default Modal
