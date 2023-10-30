import React, { useEffect, useState } from "react";
import Button from "./Button";

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
          handleAnswer("[Not Answered]");
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


  function convertHtmlEntities(str) {
    return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  }
  

  const htmlStr = quizData.question
  const jsStr = convertHtmlEntities(htmlStr);

  return (
    <div className=" mx-auto w-11/12 mobile:w-8/12 mt-24">
      <div className="">
        <p className=" ml-auto font-bold text-white rounded bg-primary m-4  p-2 w-fit">
          Time -: {timer} Secs
        </p>
        <div className="border-2 border-primary rounded">
          <p className="w-full p-6 text-white bg-primary">
            {" "}
            Q.
            {jsStr}
          </p>

          {mixedAnswers.map((val, ind) => {
            return (
              <p
                className="border-2 border-zinc-500 m-4 p-3 rounded text-primary font-semibold text-normal hover:bg-primary hover:text-white hover:border-white mobile:hover:bg-white mobile:hover:text-primary mobile:hover:border-zinc-500 "
                onClick={() => handleAnswer(val)}
                key={ind}
              >
                {val}
              </p>
            );
          })}
          <Button handleScreen={handleScreen} label={"Go To Home"} />

          <p className="text-center py-3 text-white bg-primary mt-3">
          Click on an answer to submit it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Question;
