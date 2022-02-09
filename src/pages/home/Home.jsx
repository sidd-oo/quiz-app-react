import "./Home.css";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="home-main">
        <section className="home-section">
          <h1 className="title">Coding Quiz Challenge</h1>
          <p className="paragraph">
            Try to answer the following code-related question within the time
            limit.
          </p>
          <p className="paragraph">
            Keep in mind that every incorrect answer will penalize your
            score/time by ten seconds!
          </p>
          <Link to="quiz/0" className="link">
            <button className="start-btn">Start Quiz</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
