import React from "react";
import "./SunCloudAnimation.css";

export default function SunCloudAnimation() {
  return (
    <div className="sun-cloud">
      <img src={require("./images/sun.png")} className="sun-cloud-sun" />
      <i className="fa-solid fa-cloud sun-cloud-cloud-top"></i>
      <i className="fa-solid fa-cloud sun-cloud-cloud-bottom"></i>
    </div>
  );
}
