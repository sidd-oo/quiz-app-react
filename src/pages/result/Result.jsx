import { useLocation } from 'react-router-dom';
import './Result.css';

const Result = (props) => {
  const { state } = useLocation();
  return <div className='result'>
      <section className="home-section">
        <h1>All done!</h1>
        <p>Your final score is {state}</p>
        <p>Enter initials: <input type="text" /></p>
        <button>Submit</button>
      </section>
  </div>;
};

export default Result;
