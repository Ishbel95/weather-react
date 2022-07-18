import React from "react";
import CurrentWeatherImage from "./CurrentWeatherImage";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let max = Math.round(props.data.temp.max);
    return `${max}°`;
  }
  function minTemperature() {
    let min = Math.round(props.data.temp.min);
    return `${min}°`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    return days[day];
  }
  return (
    <ul className="weather-forecast-display">
      <li className="weather-forecast-day">{day()}</li>
      <li className="weather-forecast-image">
        <CurrentWeatherImage icon={props.data.weather[0].icon} />
      </li>
      <li className="weather-forecast-temperature">
        <span className="weather-forecast-max-temp">{maxTemperature()}</span>
        <span className="weather-forecast-min-temp">{minTemperature()}</span>
      </li>
    </ul>
  );
}
