import Header from '../../components/header/Header';
import './Questionaire.css'

const Questionaire = () => {
  return <div className='questionaire'>
      <Header/>
      <section className="home-section">
        <h1>Which of the following command is used to install create-react-app?</h1>
        <div className="answer">
          <button class="option">1. npm install -g create-react-app</button>
          <button class="option">2. npm install create-react-app</button>
          <button class="option">3. npm install -f create-react-app</button>
          <button class="option">4. install -g create-react-app</button>
        </div>
      </section>

  </div>
};

export default Questionaire;



