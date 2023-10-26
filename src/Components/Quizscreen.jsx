import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Question from "./Question";
import Result from "./Result";

function Quizscreen({ handleScreen, inputValue }) {
  const [quizData, setQuizData] = useState();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=${inputValue.question}${inputValue.Catogaries}${inputValue.level}${inputValue.type}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, [inputValue]);


  const handleAnswer = (answer) => {
    if (answer == quizData[current].correct_answer) {
      console.log("right");
      setScore(score + 1)
    } else {
      console.log("wrong");
    }
    setCurrent(current + 1)
    if (quizData.length <= quizData[current + 1]) {
      console.log("End")
    }
  };

  if (!quizData) {
    return <Loading />;
  } else if (current < quizData.length) {
    return (<Question quizData={quizData[current]} handleScreen={handleScreen} handleAnswer={handleAnswer} />)
  } else {
    return (
      <Result score={score} data={quizData}/>
    );
  }
}

export default Quizscreen;
