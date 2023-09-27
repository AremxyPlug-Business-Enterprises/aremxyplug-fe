import React from 'react';
import "../CurrencyConversion/currencyConversion.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal bg-[#454545] bg-opacity-20">
      <div className="modal-overlay bg-[#454545] bg-opacity-20" onClick={onClose}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
    </div>
  );
}

export default Modal;
