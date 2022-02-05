import './Home.css'
import Header from "../../components/header/Header";

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
        <button class="start-btn">Start Quiz</button>
      </section>
    </div>
  );
};

export default Home;
