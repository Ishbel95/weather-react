import React from "react";
import CurrentWeatherImage from "./CurrentWeatherImage";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2 ">
          <ul className="weather-forecast-display">
            <li className="weather-forecast-day">Mon</li>
            <li className="weather-forecast-image">
              <CurrentWeatherImage icon="01d" />
            </li>
            <li className="weather-forecast-temperature">
              <span className="weather-forecast-max-temp">10° </span>

              <span className="weather-forecast-min-temp"> 5°</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
