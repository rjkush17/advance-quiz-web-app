import React, { useState } from "react";
import pass from "../assets/img/pass.jpg";
import fail from "../assets/img/fail.avif";
import Button from "./Button";

function Result({ score, data, handleScreen, userAnswer }) {
  const [screens, setScreens] = useState(true);

  const handlescreens = () => {
    setScreens(!screens);
  };

  const percentage = (score * 100) / data.length;

  let grade;
  let resultMessage;

  if (percentage >= 90) {
    grade = "A+";
    resultMessage = "You're a Quiz Genius! 🎓 Your knowledge knows no bounds!";
  } else if (percentage >= 80) {
    grade = "A";
    resultMessage = "Impressive! 🌟 You're on your way to becoming a quiz master!";
  } else if (percentage >= 70) {
    grade = "B+";
    resultMessage = "Well done! 🏆 Your quiz skills are shining brightly!";
  } else if (percentage >= 60) {
    grade = "B";
    resultMessage = "Nice job! 🚀 You're climbing the quiz mountain!";
  } else if (percentage >= 50) {
    grade = "C";
    resultMessage = "Good effort! 📚 Keep quizzing and you'll reach new heights!";
  } else {
    grade = "F";
    resultMessage = "Don't give up! 🧐 Keep quizzing, and your knowledge will grow!";
  }

  return (
    <div className="border-2 border-zinc-500 w-[97%] bg-white mx-auto mt-8 rounded pb-8 mobile:w-8/12">
     
      <div className="flex text-white mobile:text-medium leading-medium">
        <button
          className={`${
            screens ? "bg-white text-primary w-[50%] py-2 mobile:py-4" : "bg-third w-[50%] py-2 mobile:py-4"
          }`}
          onClick={() => {
            handlescreens();
          }}
        >
          Score
        </button>
        <button
          className={`${
            !screens
              ? "bg-white text-primary w-[50%] py-2 mobile:py-4"
              : "bg-third text-white text-primary w-[50%] py-2 mobile:py-4"
          }`}
          onClick={() => {
            handlescreens();
          }}
        >
          Show All Answers
        </button>
      </div>

      {screens && (
        <div className="text-center mt-10">
          <h1 className={`${
            percentage >= 50
              ? "text-green-700 text-medium leading-medium mobile:text-3xl leading-large"
              : "text-red-700 text-medium leading-medium mobile:text-3xl leading-large"
          }`}>
            {resultMessage}
          </h1>
          <div className="w-[40%] mx-auto">
            {percentage >= 50 ? (
              <img src={pass} alt="You Passed Img" className="w-full object-cover" />
            ) : (
              <img src={fail} alt="You Failed Img" className="w-full object-cover" />
            )}
          </div>
          <h4 className="text-medium leading-medium text-primary my-4">You've achieved a "{grade}" grade.</h4>
          <div className="rounded bg-primary w-full mobile:mx-12 py-2">
            <div className="row"> Your Grade "<span className="text-primary">{grade}</span>"</div>
            <div className="row">Total Percentage "<span className="text-primary">{percentage}</span>%"</div>
            <div className="row">Total Correct Answer "<span className="text-primary">{score}</span>"</div>
            <div className="row">Total Number Of Answer "<span className="text-primary">{data.length}</span>"</div>
            <div className="row">Total Correct Answer "<span className="text-primary">{data.length - score}</span>"</div>
          </div>
        </div>
      )}

      {!screens && (
        <div className=" mx-auto mt-2 p-1 w-full mobile:w-11/12  mt-12">
          {data.map((val, ind) => (
            <div key={ind}>
              <h2 className="text-primary">
                Q-{ind + 1}. {val.question}
              </h2>
              <div className="flex">
              <h5 className="tag">{val.category}</h5>
              <h5 className="tag">{val.difficulty}</h5>
              <h5 className="tag">{val.type}</h5>
              </div>
              <h3 className="mt-2">Ans-:<span className="text-green-500">{val.correct_answer}</span></h3>
              <h3 className="border-b-2 border-zinc-500 mb-4">Your Ans-: {userAnswer[ind]}</h3>
              
            </div>
          ))}
        </div>
      )}

<Button handleScreen={handleScreen} label={"Go To Home"} />

    </div>
  );
}

export default Result;
