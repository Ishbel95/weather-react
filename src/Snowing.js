import React from "react";
import "./Snowing.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Snowing() {
  return (
    <div className="snow">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_WtPCZs.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
