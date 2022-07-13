import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [submit, setSubmit] = useState(false);
  const [city, setCity] = useState("City");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setSubmit(true);
    console.log(response);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c30a0fffae157b2512a9a148a2b81dbf";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  let form = (
    <div className="WeatherSearch">
      <nav className="navbar navbar-light d-flex">
        <div className="container-fluid">
          <form className="d-flex" id="search-form" onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="search"
              placeholder="Enter a City"
              id="search-input"
              title="Search a city"
              onChange={updateCity}
            />
            <div className="d-flex justify-content-end">
              <button
                id="search-button"
                className="btn btn-outline-success button-one"
                type="submit"
                title="Search button"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button
                id="geo-location"
                className="btn btn-outline-success"
                type="submit"
                title="Geo-location button"
              >
                <i className="fa-solid fa-location-arrow"></i>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );

  if (submit) {
    return (
      <div className="WeatherSearch">
        {form}
        <h1>{city}</h1>

        <div className="row">
          <div className="col-6 weather-details">
            <h2 className="LastUpdated">Last updated: 12:05</h2>
            <ul>
              <li>
                <i className="fa-solid fa-droplet"></i> :{" "}
                {Math.round(weather.humidity)}%
              </li>
              <li>
                <i className="fa-solid fa-wind"></i> :{" "}
                {Math.round(weather.wind)}km/h
              </li>
              <li>Feels like: {Math.round(weather.feel)}℃</li>
            </ul>
          </div>
          <div className="col-6 current-weather">
            <ul>
              <li>{Math.round(weather.temperature)}℃</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
              <li>{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherSearch">
        {form}
        <h1>London</h1>

        <div className="row">
          <div className="col-6 weather-details">
            <h2 className="LastUpdated">Last updated: 12:05</h2>
            <ul>
              <li>
                <i className="fa-solid fa-droplet"></i> : {Math.round(2.5)}%
              </li>
              <li>
                <i className="fa-solid fa-wind"></i> : {Math.round(10)}km/h
              </li>
              <li>Feels like: {Math.round(15)}℃</li>
            </ul>
          </div>
          <div className="col-6 current-weather">
            <ul>
              <li>{Math.round(14)}℃</li>
              <li>
                <img src={weather.icon} alt={weather.description} />
              </li>
              <li>Cloudy</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
