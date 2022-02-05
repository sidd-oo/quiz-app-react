import './Result.css';

const Result = () => {
  return <div className='result'>
      <section className="home-section">
        <h1>All done!</h1>
        <p>Your final score is 9</p>
        <p>Enter initials: <input type="text" /></p>
        <button>Submit</button>
      </section>
  </div>;
};

export default Result;
