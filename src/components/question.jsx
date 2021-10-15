import React from "react";
import { useGlobalContext } from "../context";
import shuffleArray from "../utils";
import styles from './question.module.css';
import {FaBackspace} from "react-icons/fa"

const Question = () => {
    const {  index, questions, nextQuestions, correct, checkAnswer, goToHome } = useGlobalContext();
    const { question, incorrect_answers, correct_answer } = questions[index];

    const answers = shuffleArray([...incorrect_answers, correct_answer]);

    const createQuestionMarkup = (question)=> {
        return {__html:question }
    }

    const createAnswerMarkup = (answer)=> {
        return {__html:answer}
    }

  return (
    <section className={styles.quiz}>
        <FaBackspace className={styles['back-btn']} onClick={goToHome}/>
        <p className={styles["question-number"]}>
            Question: {index <= questions.length ? index+1 : null}
        </p>
      <p className={styles["correct-answers"]}>
        correct answers : {correct}/{questions.length }
      </p>
      <article className={styles.container}>
        <h2 dangerouslySetInnerHTML={createQuestionMarkup(question)} />
        <div className={styles["btn-container"]}>
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className={styles["answer-btn"]}
                onClick={() => checkAnswer(correct_answer === answer)}
                dangerouslySetInnerHTML={createAnswerMarkup(answer)}
              />
            );
          })}
        </div>
      </article>
      <button className={styles["next-question"]} onClick={nextQuestions}>
        next question
      </button>
    </section>
  );
};

export default Question;
