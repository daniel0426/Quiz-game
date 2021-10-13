import React from "react";

const SetupForm = () => {
  const handleChange = () => {};
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
              // value = {}
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
              // value = {}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            >
              <option value="sports">sports</option>
              <option value="politics">politics</option>
              <option value="animal">animal</option>
              <option value="vehicle">vehicle</option>
              <option value="celebrities">celebrities</option>
            </select>
          </div>
          {/* difficulty  */}
          <div className="form-control">
            <label htmlFor="difficulty"></label>
            <select name="difficulty" id="difficulty"
                className='form-input'
                // value={}
                onChange={handleChange}
            >
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">
              start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
