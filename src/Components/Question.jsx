import React from "react";

function Question({ quizData, handleScreen, handleAnswer }) {
  const mixedAnswers = [quizData.correct_answer, ...quizData.incorrect_answers];
  let i = Math.floor(Math.random() * (quizData.incorrect_answers.length + 1));
  [mixedAnswers[0], mixedAnswers[i]] = [mixedAnswers[i], mixedAnswers[0]];
  console.log(quizData.correct_answer)
  return (
    <div>
      <div className="">
        <p>{quizData.question}</p>
        {quizData.type == "multiple" &&
          mixedAnswers.map((val, ind) => {
            return (
              <p onClick={() => handleAnswer(val)} key={ind}>
                {val}
              </p>
            );
          })}
        {quizData.type == "boolean" && (
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
