import React from "react";
import "./Fog.css";

export default function Fog() {
  return (
    <div className="fog">
      <i className="fa-solid fa-cloud cloud-fog"></i>
      <i className="fa-solid fa-minus fog-top"></i>
      <i className="fa-solid fa-minus fog-middle"></i>
      <i className="fa-solid fa-minus fog-bottom"></i>
    </div>
  );
}
