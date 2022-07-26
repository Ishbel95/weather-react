import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherForecast from "./WeatherForecast";
import WeatherAnimation from "./WeatherAnimation";

import WeatherData from "./WeatherData";

export default function WeatherSearch(props) {
  const [submit, setSubmit] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  function geoUrl(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "1244d051e74e0f794e1452d1e9bf9e68";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let unit = "metric";
    let url = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${apiKey}`;
    axios.get(url).then(showWeather);
  }

  function getGeoLocation(event) {
    navigator.geolocation.getCurrentPosition(geoUrl);
  }

  function search() {
    let units = "metric";
    let apiKey = "1244d051e74e0f794e1452d1e9bf9e68";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });

    setSubmit(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  let form = (
    <div className="WeatherSearch">
      <nav className="navigation navbar-light">
        <form onSubmit={handleSubmit} className="d-flex">
          <input
            className="form-control search-input"
            type="search"
            placeholder="Enter a City"
            title="Search a city"
            onChange={updateCity}
          />

          <button
            id="search-button"
            className="btn ms-2"
            type="submit"
            title="Search button"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button
            id="geo-location"
            className="btn ms-2"
            type="submit"
            title="Geo-location button"
            onClick={getGeoLocation}
          >
            <i className="fa-solid fa-location-arrow"></i>
          </button>
        </form>
      </nav>
    </div>
  );

  if (submit) {
    return (
      <div className="WeatherSearch">
        {form}
        <WeatherData data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
        <WeatherAnimation icon={weather.icon} />
      </div>
    );
  } else {
    search();
    return <p>Loading</p>;
  }
}
