import React, { useState } from "react";
import data from "../data";
import Quizresult from "./Quizresult";
const Quiz = () => {
  const [currentques, setcurrentques] = useState(0);
  const [score, setscore] = useState(0);
  const [clickoption, setclickoption] = useState(0);
  const [showresult, setshowresult] = useState(false);
  const changeques = () => {
    updatescore();
    if (currentques < data.length - 1) {
      setclickoption(0);
      setcurrentques(currentques + 1);
    } else {
      setshowresult(true);
    }
  };
  const updatescore = () => {
    if (clickoption === data[currentques].answer) {
      setscore(score + 5);
    } else {
      setscore(score - 1);
    }
  };
  const tryagain=()=>{
    setclickoption(0);
    setscore(0);
    setcurrentques(0);
    setshowresult(false);
  }

  return (
    <>
      <p className="heading-txt">QUIZ APP</p>
      <div className="container">
        {showresult ? (
          <Quizresult score={score} totalscore={data.length * 5} tryagain={tryagain} />
        ) : (
          <>
            <div className="question">
              <span className="question-number">{currentques + 1}.</span>
              <span className="question-txt">{data[currentques].question}</span>
            </div>
            <div className="option-container">
              {data[currentques].options.map((option, i) => {
                return (
                  <button
                    // className="option-btn"
                    className={`option-btn ${
                      clickoption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setclickoption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeques}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
