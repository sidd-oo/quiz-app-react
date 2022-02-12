import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

const Result = (props) => {
  const { state: scored } = useLocation();
  const [initials, setInitials] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let scores = JSON.parse(localStorage.getItem("scores"));

    let score = {
      ...scores,
      [initials]: scored,
    };
    localStorage.setItem("scores", JSON.stringify(score));
    navigate("/highscore");
  };

  return (
    <div className="result">
      <div className="result-main">
        <section className="result-section">
          <h1>All done!</h1>
          <p className="subtitle">Your final score is {scored}</p>
          <p className="inputTitle">
            Enter initials:{" "}
            <input type="text" onChange={(e) => setInitials(e.target.value)} />
          </p>
          <button onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </section>
      </div>
    </div>
  );
};

export default Result;
