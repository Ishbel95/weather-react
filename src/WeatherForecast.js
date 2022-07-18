import React from "react";
import CurrentWeatherImage from "./CurrentWeatherImage";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response);
  }
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "c30a0fffae157b2512a9a148a2b81dbf";
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(forecastUrl).then(showForecast);
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

              <span className="weather-forecast-min-temp"> 5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
