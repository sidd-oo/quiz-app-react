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
    navigate('/highscore');
  };

  return (
    <div className="result">
      <section className="home-section">
        <h1>All done!</h1>
        <p>Your final score is {scored}</p>
        <p>
          Enter initials:{" "}
          <input type="text" onChange={(e) => setInitials(e.target.value)} />
        </p>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </section>
    </div>
  );
};

export default Result;
