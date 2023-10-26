import React, { useEffect, useState } from "react";

function Quizscreen({ handleScreen, inputValue }) {
  const [quizData, setQuizData] = useState({});

  useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=${inputValue.question}${inputValue.Catogaries}${inputValue.level}${inputValue.type}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuizData(data.results[0]));
  }, [quizData]);

  console.log(inputValue);

  return (
    <div>
      <div className="">
        <p>{quizData.question}</p>
        <p>{quizData.correct_answer}</p>
        <p>{quizData.incorrect_answers[0]}</p>
        <p>{quizData.incorrect_answers[1]}</p>
        <p>{quizData.incorrect_answers[2]}</p>
      </div>
      <button onClick={handleScreen}>Go back Home</button>
    </div>
  );
}

export default Quizscreen;
