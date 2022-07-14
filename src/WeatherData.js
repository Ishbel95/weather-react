import React from "react";
import LastUpdated from "./LastUpdated";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6 weather-details">
          <LastUpdated currentDate={props.data.date} />
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i> :{" "}
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
            <li className="current-temperature">
              {Math.round(props.data.temperature)}℃ | ℉
            </li>
            <li>
              <img
                className="current-weather-image"
                src={props.data.icon}
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
