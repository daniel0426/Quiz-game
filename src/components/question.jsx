import React from "react";
import { useGlobalContext } from "../context";
import shuffleArray from "../utils";

const Question = () => {
    const {  index, questions, nextQuestion, correct, checkAnswer } = useGlobalContext();
    const { question, incorrect_answers, correct_answer } = questions[index];

    const answers = shuffleArray([...incorrect_answers, correct_answer]);

    const createQuestionMarkup = (question)=> {
        return {__html:question }
    }
    const createAnserMarkup = (answer)=> {
        return {__html:answer}
    }

  return (
    <section className="quiz">
        <p className="question-number">
            Question: {index <= questions.length ? index+1 : null}
        </p>
      <p className="correct-answers">
        correct answers : {correct}/{questions.length }
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={createQuestionMarkup(question)} />
        <div className="btn-container">
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                onClick={() => checkAnswer(correct_answer === answer)}
                dangerouslySetInnerHTML={createAnserMarkup(answer)}
              />
            );
          })}
        </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>
        next question
      </button>
    </section>
  );
};

export default Question;
