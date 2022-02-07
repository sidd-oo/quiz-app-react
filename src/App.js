import "./App.css";
import Home from "./pages/home/Home";
import Questionaire from "./pages/questionaire/Questionaire";
import Highscore from "./pages/Highscore/Highscore";
import Result from "./pages/result/Result"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highscore" element={<Highscore/>} />
        <Route path="/quiz/:ques_no" element={<Questionaire />} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;
