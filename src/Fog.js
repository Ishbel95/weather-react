import React from "react";
import "./Fog.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Fog() {
  return (
    <div className="fog">
      <Player
        autoplay
        loop
        src="https://assets9.lottiefiles.com/temp/lf20_kOfPKE.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
