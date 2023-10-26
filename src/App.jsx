import { useState } from "react";
import Quizscreen from "./Components/Quizscreen";

function App() {
  const [screen, setScreen] = useState(true);
  const [inputValue, setInputValue] = useState({
    question: 5,
    Catogaries: "",
    level: "",
    type: "",
  });
  const [time, setTime] = useState({
    minutes : 0,
    seconds : 15
  })

  const handleScreen = () => {
    if(time.minutes == time.seconds){
      alert("Set Atleast 15sec or more ")
    }
    setScreen(!screen);
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setInputValue((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const handleChange2 = (e) => {

    setTime((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      {screen ? (
        <>
          <p>Hello Quiz App Project</p>

          <div className="wapper">
            <label htmlFor="question">
              How many Quiz question do you want ?
            </label>
            <select onChange={handleChange} name="question" id="question">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
            </select>
          </div>

          <div className="wapper">
            <label htmlFor="categories">
              In which category do you want to play the quiz?
            </label>
            <select
              onChange={handleChange}
              name="Catogaries"
              id="categories"
              placeholder="Select Questions Type"
            >
              <option value="">Any categories</option>
              <option value="&category=9">General Knowledge</option>
              <option value="&category=10">Entertainment: Books</option>
              <option value="&category=11">Entertainment: Film</option>
              <option value="&category=12">Entertainment: Music</option>
              <option value="&category=13">
                Entertainment: Musicals & Theatres
              </option>
              <option value="&category=14">Entertainment: Television</option>
              <option value="&category=15">Entertainment: Video Games</option>
              <option value="&category=16">Entertainment: Board Games</option>
              <option value="&category=17">Science & Nature</option>
              <option value="&category=18">Science: Computers</option>
              <option value="&category=19">Science: Mathematics</option>
              <option value="&category=20">Mythology</option>
              <option value="&category=21">Sports</option>
              <option value="&category=22">Geography</option>
              <option value="&category=23">History</option>
              <option value="&category=24">politics</option>
              <option value="&category=25">Arts </option>
              <option value="&category=26">Celebrities </option>
              <option value="&category=27"> Animals</option>
              <option value="&category=28"> Vehicles</option>
              <option value="&category=29">Entertainment: Comics</option>
              <option value="&category=30"> Science: Gadgets </option>
              <option value="&category=31">
                Entertainment: Japanese Anime & Manga
              </option>
              <option value="&category=32">
                Entertainment: Cartoon & Animations{" "}
              </option>
            </select>
          </div>

          <div className="wapper">
            <label htmlFor="level">Default level</label>
            <select onChange={handleChange} name="level" id="level">
              <option value="">Any Type</option>
              <option value="&difficulty=easy">Easy</option>
              <option value="&difficulty=medium">Medium</option>
              <option value="&difficulty=hard">Hard</option>
            </select>
          </div>

          <div className="wapper">
            <label htmlFor="type">Type</label>
            <select onChange={handleChange} name="type" id="type">
              <option value="">Any type</option>
              <option value="&type=boolean">True & False</option>
              <option value="&type=multiple">MCQ</option>
            </select>
          </div>

          <div className="wapper">
            <label htmlFor="minutes">Time In Min</label>
            <select onChange={handleChange2} name="minutes" id="minutes">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
            </select>

            <label htmlFor="seconds">seconds</label>
            <select onChange={handleChange2} name="seconds" id="seconds">
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              <option value="0">0</option>
            </select>
          </div>

          <button onClick={handleScreen}>Start Quiz</button>
        </>
      ) : (
        <>
          <Quizscreen handleScreen={handleScreen} inputValue={inputValue} time={time} />
        </>
      )}
    </>
  );
}

export default App;
