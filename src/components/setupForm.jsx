import React from "react";
import { useGlobalContext } from "../context";

const SetupForm = () => {
  const {quiz, error,handleChange, handleSubmit, } = useGlobalContext()
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value = {quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="amount">category</label>
            <select
              name="category"
              id="category"
              value = {quiz.category}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            >
              <option value="animal">animals</option>
              <option value="art">art</option>
              <option value="celebrities">celebrities</option>
              <option value="politics">politics</option>
              <option value="music">music</option>
              <option value="sports">sports</option>
              <option value="vehicle">vehicle</option>
            </select>
          </div>
          {/* difficulty  */}
          <div className="form-control">
            <label htmlFor="difficulty"></label>
            <select name="difficulty" id="difficulty"
                className='form-input'
                value={quiz.difficulty}
                onChange={handleChange}
            >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
              start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
