import React from "react";
import loadingAni from "../assets/img/loading.gif"

function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center mobile:h-[80vh] ">
      <img src={loadingAni} alt="Loading Animated GIF" className="mobile:h-2/4" />
      <h1 className=" mx-4 m-2 text-medium leading-medium laptop:text-large laptop:leading-large text-primary ">Preparing Your Quiz...</h1>
      <p className="mx-4 text-center text-small leading-small mobile:text-normal leading-normal">Stay sharp! The timer can be your ally. Keep an eye on it to conquer the quiz faster.</p>
    </div>
  );
}

export default Loading;
