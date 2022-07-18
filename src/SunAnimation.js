import React from "react";
import "./SunAnimation.css";

export default function SunAnimation() {
  return (
    <div>
      <img src={require("./images/sun.png")} className="clear-sky" />
    </div>
  );
}
