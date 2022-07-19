import React from "react";
import "./SunCloudAnimation.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function SunCloudAnimation() {
  return (
    <div className="SunCloudAnimation">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_dgjK9i.json"
        style={{ width: "70%" }}
      ></Player>
    </div>
  );
}
