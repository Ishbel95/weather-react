import React from "react";
import "./Raining.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Raining() {
  return (
    <div className="Raining">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_rpC1Rd.json"
        style={{ width: "70%" }}
      ></Player>
    </div>
  );
}
