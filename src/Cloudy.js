import React from "react";
import "./Cloudy.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Cloudy() {
  return (
    <div className="cloud-container">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_VAmWRg.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
