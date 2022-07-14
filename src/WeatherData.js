import React from "react";
import LastUpdated from "./LastUpdated";
import CurrentWeatherImage from "./CurrentWeatherImage";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1 className="mt-1">{props.data.city}</h1>
      <div className="row">
        <div className="col-6 weather-details mt-1">
          <LastUpdated currentDate={props.data.date} />
          <ul>
            <li>
              <i className="fa-solid fa-droplet mt-4"></i> :{" "}
              {Math.round(props.data.humidity)}%
            </li>
            <li>
              <i className="fa-solid fa-wind"></i> :{" "}
              {Math.round(props.data.wind)}
              km/h
            </li>
            <li>Feels like: {Math.round(props.data.feel)}℃</li>
          </ul>
        </div>
        <div className="col-6 current-weather">
          <ul>
            <li>
              <span className="current-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <a href="#">℃ </a>|<a href="#">℉</a>
            </li>
            <li>
              <CurrentWeatherImage
                icon={props.data.icon}
                alt={props.data.description}
              />
            </li>
            <li className="text-capitalize current-weather-description">
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
