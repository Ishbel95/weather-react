import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  // state management
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  // useEffect Hook to only set Loaded to false when coordinates change so we don't run api call too may times
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  // set loaded to true once we have response from api, then render forecat
  function showForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    // if loaded is true, so when we get a respose from api, map through response and render 5 days of forecasst.
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-2 " key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    // only run api call when loaded is false
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "1244d051e74e0f794e1452d1e9bf9e68";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(forecastUrl).then(showForecast);
  }
}
