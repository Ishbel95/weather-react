import React from "react";
import "./SunAnimation.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SunAnimation() {
  return (
    <div className="SunAnimation">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_Stdaec.json"
        style={{ width: "70%" }}
      ></Player>
    </div>
  );
}
