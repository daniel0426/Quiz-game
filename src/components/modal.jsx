import React from "react";
import { useGlobalContext } from "../context";

const Modal = () => {
    const {openModal, closeModal} = useGlobalContext()
    
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
