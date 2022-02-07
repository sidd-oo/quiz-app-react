import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./Highscore.css";

const Highscore = () => {
  return (
    <div className="highscore">
      <Header />
      <section className="home-section">
        <h1>Highscores</h1>
        <ol>
          <li>Siddharth - 43</li>
          <li>Ibrahim - 38</li>
        </ol>
        <div className="buttons">
          <Link to="/" className="link">
            <button class="btn">Go Back</button>
          </Link>
          <button class="btn">Clear Highscore</button>
        </div>
      </section>
    </div>
  );
};

export default Highscore;
