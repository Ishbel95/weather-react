import React from "react";
import "./Snowing.css";

export default function Snowing() {
  return (
    <div className="snow">
      <i className="fa-solid fa-cloud snow-cloud"></i>
      <div className="SnowDrops">
        <i className="fa-solid fa-snowflake snow-one"></i>
        <i className="fa-solid fa-snowflake snow-two"></i>
        <i className="fa-solid fa-snowflake snow-three"></i>
      </div>
    </div>
  );
}
