import React from "react";
import "./images/clearsky.png";
import "./images/fog.png";
import "./images/raining.png";
import "./images/snowing.png";
import "./images/sun.png";
import "./images/sunandcloud.png";
import "./images/thunder.png";
import "./images/cloudy.png";

export default function CurrentWeatherImage(props) {
  const iconMapping = {
    "01d": "./images/sun.png",
    "01n": "./images/sun.png",
    "02n": "./images/sunandcloud.png",
    "02d": "./images/sunandcloud.png",
    "03d": "./images/cloudy.png",
    "03n": "./images/cloudy.png",
    "04d": "./images/cloudy.png",
    "04n": "./images/cloudy.png",
    "09d": "./images/raining.png",
    "09n": "./images/raining.png",
    "10d": "./images/raining.png",
    "10n": "./images/raining.png",
    "11d": "./images/thunder.png",
    "11n": "./images/thunder.png",
    "13d": "./images/snowing.png",
    "13n": "./images/snowing.png",
    "50d": "./images/fog.png",
    "50n": "./images/fog.png",
  };
  let newImage = iconMapping[props.icon];
  return (
    <div>
      <img className="current-weather-image" src={newImage} alt={props.alt} />
    </div>
  );
}

// if (props.icon === "01d" || props.icon === "01n") {
//   icon = require(`./images/clearsky.png`);
// } else if (props.icon === "02d" || props.icon === "02n") {
//   icon = require(`./images/sunandcloud.png`);
// } else if (
//   props.icon === "03d" ||
//   props.icon === "03n" ||
//   props.icon === "04d" ||
//   props.icon === "04n"
// ) {
//   icon = require(`./images/cloudy.png`);
// } else if (
//   props.icon === "09d" ||
//   props.icon === "09n" ||
//   props.icon === "10d" ||
//   props.icon === "10n"
// ) {
//   icon = require(`./images/raining.png`);
// } else if (props.icon === "11d" || props.icon === "11n") {
//   icon = require(`./images/thunder.png`);
// } else if (props.icon === "13d" || props.icon === "13n") {
//   icon = require(`./images/snowing.png`);
// } else if (props.icon === "50d" || props.icon === "50n") {
//   icon = require(`./images/fog.png`);
// }
