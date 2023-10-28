import React, { useEffect, useState } from "react";

function Question({ quizData, handleScreen, handleAnswer, time }) {
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const answers = [quizData.correct_answer, ...quizData.incorrect_answers];
    const randomIndex = Math.floor(Math.random() * answers.length);
    [answers[0], answers[randomIndex]] = [answers[randomIndex], answers[0]];

    setMixedAnswers(answers);
  }, [handleAnswer]);

  useEffect(() => {
    let min = parseInt(time.minutes);
    let sec = parseInt(time.seconds);
    let total = parseInt(min * 60) + parseInt(sec);
    setTimer(total);

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
         
          handleAnswer("Time's up!"); 
          clearInterval(interval); 
          return 0; 
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [handleAnswer, time]); 

  return (
    <div>
      <div className="">
        <p>{quizData.question}</p>
        <p>Time Left {timer}</p>
        {quizData.type === "multiple" &&
          mixedAnswers.map((val, ind) => {
            return (
              <p onClick={() => handleAnswer(val)} key={ind}>
                {val}
              </p>
            );
          })}
        {quizData.type === "boolean" && (
          <>
            <p onClick={() => handleAnswer("True")}>True</p>
            <p onClick={() => handleAnswer("False")}>False</p>
          </>
        )}
      </div>
      <button onClick={handleScreen}>Go to Home</button>
    </div>
  );
}

export default Question;
