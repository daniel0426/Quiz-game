import React from "react";
import { useGlobalContext } from "./context";
import SetupForm from "./components/setupForm";
import Loading from "./components/loading";
import shuffleArray from "./utils";
import Modal from "./components/modal";

const App = () => {
  const { isLoading, waiting, index, questions, nextQuestion, correct, checkAnswer } = useGlobalContext();

  const createQuestionMarkup = (question)=> {
      return {__html:question }
  }
  const createAnserMarkup = (answer)=> {
      return {__html:answer}
  }

  if (waiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = shuffleArray([...incorrect_answers, correct_answer]);
  
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {correct}/{questions.length}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={createQuestionMarkup(question)}/>
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
    </main>
  );
};

export default App;
