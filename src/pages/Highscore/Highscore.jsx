import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Highscore.css";

const Highscore = () => {
  const scores = JSON.parse(localStorage.getItem("scores"));
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('scores');
    navigate("/");
  }

  return (
    <div className="highscore">
      <Header />
      <section className="home-section">
        <h1>Highscores</h1>
        <ol>
          {scores &&
            Object.keys(scores)
              .sort((a, b) => scores[b] - scores[a])
              .map(
                (key, index) =>
                  index < 5 && (
                    <li key={index}>
                      {key} - {scores[key]}
                    </li>
                  )
              )}
        </ol>
        <div className="buttons">
          <Link to="/" className="link">
            <button className="btn">Go Back</button>
          </Link>
          <button className="btn" onClick={handleClick}>
            Clear Highscore
          </button>
        </div>
      </section>
    </div>
  );
};

export default Highscore;
