import React from "react";
import { useGlobalContext } from "../context";
import styles from './modal.module.css';

const Modal = () => {
  const { modalOpen, closeModal, correct, questions } = useGlobalContext();
  const answerRate = ((correct/questions.length)* 100).toFixed(0);

  return (
    <div
      className={`${
        modalOpen ? `${styles['modal-container']} ${styles.isOpen}` : styles["modal-container"]
      }`}
    >
      <div className={styles['modal-content']}>
        <h2>congrats !</h2>
        <p>You answered {answerRate}% of questions correctly</p>
        <button className={styles['close-btn']} onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
