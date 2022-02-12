import Header from "../../components/header/Header";
import "./Questionaire.css";
import { questionaire } from "../../data/questionaire";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Questionaire = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(50);

  let navigate = useNavigate();

  useEffect(() => {
    const timerId = setInterval(()=>{
      setTimer(timer -1);
    },1000);
    return ()=> clearInterval(timerId);
  });

  const handleClick = (e) => {
    setIsAnswered(true);
    if (questionaire[questionNumber].answer === e.target.id) {
      setIsAnswerCorrect("Correct");
      setScore(score + 10);
      setTimeout(() => {
        setIsAnswerCorrect("");
        setIsAnswered(false);
        setQuestionNumber(questionNumber + 1);
      }, 1000);
    } else {
      setIsAnswerCorrect("InCorrect");
      setTimer(timer-10);
      setTimeout(() => {
        setIsAnswerCorrect("");
        setIsAnswered(false);
        setQuestionNumber(questionNumber + 1);
      }, 1000);
    }
  };

  return (
    <div className="questionaire">
      <Header timer={timer}/>
      {questionNumber < questionaire.length - 1 ? (
         timer >= 0 ? (
          <div className="questionaire-main">
          <section className="questionaire-section">
            <h1 className="question">
              {questionaire[questionNumber].question}
            </h1>
            <div className="answers">
              <button className="option" id="a" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.a}
              </button>
              <button className="option" id="b" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.b}
              </button>
              <button className="option" id="c" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
                {questionaire[questionNumber].options.c}
              </button>
              <button className="option" id="d" disabled = {isAnswered} onClick={(e) => handleClick(e)}>
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
        </div>
        ):
      <>
       { navigate('/result', {state: score}) }
      </>
      ) : (
        <>{navigate("/result", { state: score })}</>
      )}
    </div>
  );
};

export default Questionaire;
