/* eslint-disable react/prop-types */
import React from "react";

const Modal = ({ children, setShowModal }) => {
  return (
    <div className="modalContainer">
      <div className="modalContentWrapper">
        <div className="modalContentTopBar" onClick={() => setShowModal(false)}>
          <span>❌</span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
