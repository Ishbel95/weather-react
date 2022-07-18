import React from "react";
import SunAnimation from "./SunAnimation";
import SunCloudAnimation from "./SunCloudAnimation";
import Cloudy from "./Cloudy";
import Raining from "./Raining";
import Thunder from "./Thunder";
import Snowing from "./Snowing";
import Fog from "./Fog";

export default function WeatherAnimation(props) {
  const animationMapping = {
    "01d": <SunAnimation />,
    "01n": <SunAnimation />,
    "02n": <SunCloudAnimation />,
    "02d": <SunCloudAnimation />,
    "03d": <Cloudy />,
    "03n": <Cloudy />,
    "04d": <Cloudy />,
    "04n": <Cloudy />,
    "09d": <Raining />,
    "09n": <Raining />,
    "10d": <Raining />,
    "10n": <Raining />,
    "11d": <Thunder />,
    "11n": <Thunder />,
    "13d": <Snowing />,
    "13n": <Snowing />,
    "50d": <Fog />,
    "50n": <Fog />,
  };
  return <div className="">{animationMapping[props.icon]}</div>;
}
