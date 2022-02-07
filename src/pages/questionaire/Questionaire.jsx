import Header from "../../components/header/Header";
import "./Questionaire.css";
import { questionaire } from "../../data/questionaire";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Questionaire = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  // const [score, setScore] = useState(0);

  let navigate = useNavigate();

  const handleClick = (e) => {
    setIsAnswered(true);
    if (questionaire[questionNumber].answer === e.target.id) {
      setIsAnswerCorrect("Correct");
      // setScore(score + 10);
      setTimeout(() => {
        setIsAnswerCorrect("");
        setIsAnswered(false);
        setQuestionNumber(questionNumber + 1);
      }, 1000);
    } else {
      setIsAnswerCorrect("InCorrect");
      setTimeout(() => {
        setIsAnswerCorrect("");
        setIsAnswered(false);
        setQuestionNumber(questionNumber + 1);
      }, 1000);
    }
  };

  return (
    <div className="questionaire">
      <Header />
      {questionNumber < questionaire.length - 1 ? (
        <>
          <section className="home-section">
            <h1 className="question">
              {questionaire[questionNumber].question}
            </h1>
            <div className="answers">
              <button class="option" id="a" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.a}
              </button>
              <button class="option" id="b" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.b}
              </button>
              <button class="option" id="c" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.c}
              </button>
              <button class="option" id="d" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.d}
              </button>
            </div>
            {isAnswerCorrect && (
              <div>
                <hr />
                <h4>{isAnswerCorrect}</h4>
              </div>
            )}
          </section>
        </>
      ) : (
        <>{navigate("/result")}</>
      )}
    </div>
  );
};

export default Questionaire;
