import React from "react";
import loadingAni from "../assets/img/loading.gif"

function Loading() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <img src={loadingAni} alt="Loading Animated GIF" className="h-2/4" />
      <h1 className=" text-medium leading-medium laptop:text-large laptop:leading-large text-primary ">Preparing Your Quiz...</h1>
      <p className="text-normal leading-normal">Stay sharp! The timer can be your ally. Keep an eye on it to conquer the quiz faster.</p>
    </div>
  );
}

export default Loading;
