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
    "01d": require("./images/clearsky.png"),
    "01n": require("./images/clearsky.png"),
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
