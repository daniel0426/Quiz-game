import React from "react";

const Modal = () => {
  const closeModal = () => {};
  return (
    <div>
      <div className="modal-content">
        <h2>congrats</h2>
        <p>You answered ...</p>
        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
