import { useState } from "react";
import Quizscreen from "./Components/Quizscreen";
import quiz from "./assets/img/5210980.jpg"
import Button from "./Components/Button";

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
      alert("Set Time Atleast 15sec or more ")
    }else{
      setScreen(!screen);
    }
  
    
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

  function reset(){
    setInputValue({
      question: 5,
      Catogaries: "",
      level: "",
      type: "",
    })
    setTime({
      minutes : 0,
    seconds : 15
    })
  }

  const handlefunction = () => {
    handleScreen();
    reset();

  }



  return (
    <>
      {screen ? (
        <section className="w-[95%] mx-auto flex mt-8 items-center laptop:w-10/12 mobile:w-[85%]">
          <div className=" text-center mobile:text-start flex-1 mt-10">
          <h1 className=" text-medium leading-medium laptop:text-large laptop:leading-large  ">Play, Learn, Repeat: Discover <span className="text-primary">Quizzes!</span></h1>
          <p className="text-normal leading-normal">Quizzes for everyone! Select your preferences, set the timer (if you dare), and embark on a journey of self-discovery and learning.</p>

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
              {/* <option value="&category=16">Entertainment: Board Games</option> */}
              <option value="&category=17">Science & Nature</option>
              <option value="&category=18">Science: Computers</option>
              <option value="&category=19">Science: Mathematics</option>
              {/* <option value="&category=20">Mythology</option> */}
              <option value="&category=21">Sports</option>
              <option value="&category=22">Geography</option>
              <option value="&category=23">History</option>
              <option value="&category=24">politics</option>
              <option value="&category=25">Arts </option>
              <option value="&category=26">Celebrities </option>
              <option value="&category=27"> Animals</option>
              <option value="&category=28"> Vehicles</option>
              {/* <option value="&category=29">Entertainment: Comics</option> */}
              <option value="&category=30"> Science: Gadgets </option>
              {/* <option value="&category=31">
                Entertainment: Japanese Anime & Manga
              </option>
              <option value="&category=32">
                Entertainment: Cartoon & Animations{" "}
              </option> */}
            </select>
          </div>

          <div className="wapper">
            <label htmlFor="level">At which difficulty level do you want to play?</label>
            <select onChange={handleChange} name="level" id="level">
              <option value="">Any level</option>
              <option value="&difficulty=easy">Easy</option>
              <option value="&difficulty=medium">Medium</option>
              <option value="&difficulty=hard">Hard</option>
            </select>
          </div>

          <div className="wapper">
            <label htmlFor="type">Would you like to select a question type: 'Multiple' or 'True/False'?</label>
            <select onChange={handleChange} name="type" id="type">
              <option value="">Any type</option>
              <option value="&type=boolean">True & False</option>
              <option value="&type=multiple">MCQ</option>
            </select>
          </div>

          <div className="flex mt-5 flex-row justify-start items-center mx-auto w-8/12">
            <label htmlFor="minutes">Time In Min</label>
            <select onChange={handleChange2} name="minutes" id="minutes">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
            </select>

            <label htmlFor="seconds">In Sec</label>
            <select onChange={handleChange2} name="seconds" id="seconds"  >
            <option value="0">0</option>
              <option value="15" selected>15</option>
              <option value="30">30</option>
              <option value="45">45</option>
              
            </select>
          </div>

          <Button handleScreen={handleScreen} label={'Start Quiz'}/>

        </div>
        <div className="flex-1 hidden mobile:block">
          <img src={quiz} alt="" className=" w-full object-cover" />
        </div>
        </section>
      ) : (
        <>
          <Quizscreen handleScreen={handlefunction} inputValue={inputValue} time={time} />
        </>
      )}
    </>
  );
}

export default App;
