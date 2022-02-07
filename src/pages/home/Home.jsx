import "./Home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="home-section">
        <h1>Coding Quiz Challenge</h1>
        <p>
          Try to answer the following code-related question within the time
          limit.
        </p>
        <p>
          Keep in mind that every incorrect answer will penalize your score/time
          by ten seconds!
        </p>
        <Link to="quiz/0" className="link">
          <button class="start-btn">Start Quiz</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
