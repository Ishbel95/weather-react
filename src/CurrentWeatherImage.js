import React from "react";
import "./CurrentWeatherImage.css";
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
    "01d": require("./images/sun.png"),
    "01n": require("./images/sun.png"),
    "02n": require("./images/sunandcloud.png"),
    "02d": require("./images/sunandcloud.png"),
    "03d": require("./images/cloudy.png"),
    "03n": require("./images/cloudy.png"),
    "04d": require("./images/cloudy.png"),
    "04n": require("./images/cloudy.png"),
    "09d": require("./images/raining.png"),
    "09n": require("./images/raining.png"),
    "10d": require("./images/raining.png"),
    "10n": require("./images/raining.png"),
    "11d": require("./images/thunder.png"),
    "11n": require("./images/thunder.png"),
    "13d": require("./images/snowing.png"),
    "13n": require("./images/snowing.png"),
    "50d": require("./images/fog.png"),
    "50n": require("./images/fog.png"),
  };
  return (
    <div>
      <img
        className="current-weather-image"
        src={iconMapping[props.icon]}
        alt={props.alt}
      />
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
