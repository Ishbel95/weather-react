import React from "react";
import "./Snowing.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Snowing() {
  return (
    <div className="Snowing">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_WtPCZs.json"
        style={{ width: "70%" }}
      ></Player>
    </div>
  );
}
