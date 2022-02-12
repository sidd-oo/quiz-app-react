import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Highscore.css";

const Highscore = () => {
  const scores = JSON.parse(localStorage.getItem("scores"));
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("scores");
    navigate("/");
  };

  return (
    <div className="highscore">
      <Header />
      <div className="highscore-main">
        <section className="highscore-section">
          <h1 className="title">Highscores</h1>
          <ol className="orderedList">
            {scores &&
              Object.keys(scores)
                .sort((a, b) => scores[b] - scores[a])
                .map(
                  (key, index) =>
                    index < 5 && (
                      <li key={index} className="listItem">
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
    </div>
  );
};

export default Highscore;
