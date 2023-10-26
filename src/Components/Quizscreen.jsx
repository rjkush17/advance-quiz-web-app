import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Question from "./Question";
import Result from "./Result";

function Quizscreen({ handleScreen, inputValue, time }) {
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
      setScore(score + 1);
    } 
    setCurrent(current + 1);
  };

  if (!quizData) {
    return <Loading />;
  } else if (current < quizData.length) {
    return (
      <Question
        quizData={quizData[current]}
        handleScreen={handleScreen}
        handleAnswer={handleAnswer}
        time={time}
      />
    );
  } else {
    return <Result score={score} data={quizData} handleScreen={handleScreen} />;
  }
}

export default Quizscreen;
