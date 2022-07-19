import React from "react";
import "./Thunder.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Thunder() {
  return (
    <div className="thunder">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_Kuot2e.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
