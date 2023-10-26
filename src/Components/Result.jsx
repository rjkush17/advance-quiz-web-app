import React, { useState } from "react";

function Result({ score, data, handleScreen }) {
  const [screens, setScreens] = useState(true);

  const handlescreens = () => {
    setScreens(!screens);
  };

  return (
    <div>
      <button
        onClick={() => {
          handlescreens();
        }}
      >
        Score
      </button>
      <button
        onClick={() => {
          handlescreens();
        }}
      >
        Show All Answers
      </button>
      {screens && (
        <h1>
          Your Total score this {score} form {data.length}
        </h1>
      )}
      {!screens && (
        <div>
          {data.map((val, ind) => (
            <div key={ind}>
                <h2>Q-{ind+1}. {val.question}</h2>
                <h3>{val.correct_answer}</h3>
                <h5>Category -: {val.category}</h5>
                <h5>Level-: {val.difficulty}</h5>
                <h5>Type -: {val.type}</h5>

            </div>
          ))}
        </div>
      )}

      <button onClick={handleScreen}>Home</button>
    </div>
  );
}

export default Result;
