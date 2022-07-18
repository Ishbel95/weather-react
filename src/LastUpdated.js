import React from "react";
import "./LastUpdated.css";

export default function LastUpdated(props) {
  console.log(props.currentDate);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.currentDate.getDay()];
  let hours = props.currentDate.getHours();
  let minutes = props.currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      <h2 className="LastUpdated">
        Updated: {day}, {hours}:{minutes}
      </h2>
    </div>
  );
}
