import React from "react";
import "./Raining.css";

export default function Raining() {
  return (
    <div className="rain">
      <i className="fa-solid fa-cloud rain-cloud"></i>

      <i className="fa-solid fa-droplet rain-one"></i>
      <i className="fa-solid fa-droplet rain-two"></i>
      <i className="fa-solid fa-droplet rain-three"></i>
    </div>
  );
}
