import React from "react";
import loadingAni from "../assets/img/loading.gif"

function Loading() {
  return (
    <div>
      <img src={loadingAni} alt="Loading Animated GIF" />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
