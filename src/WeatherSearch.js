import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import "./images/cloudy.png";
import LastUpdated from "./LastUpdated";
// import "./images/clearsky.png";
// import "./images/fog.png";
// import "./images/raining.png";
// import "./images/snowing.png";
// import "./images/sun.png";
// import "./images/sunandcloud.png";
// import "./images/thunder.png";

export default function WeatherSearch(props) {
  const [submit, setSubmit] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function search() {
    let units = "metric";
    let apiKey = "c30a0fffae157b2512a9a148a2b81dbf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function showWeather(response) {
    let iconSource = response.data.weather[0].icon;

    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${iconSource}@2x.png`,
    });

    // if (weather.icon === "01d" || weather.icon === "01n") {
    //   iconSource = require(`./images/clearsky.png`);
    // } else if (weather.icon === "02d" || weather.icon === "02n") {
    //   iconSource = require(`./images/sunandcloud.png`);
    // } else if (
    //   weather.icon === "03d" ||
    //   weather.icon === "03n" ||
    //   weather.icon === "04d" ||
    //   weather.icon === "04n"
    // ) {
    //   iconSource = require(`./images/cloudy.png`);
    // } else if (
    //   weather.icon === "09d" ||
    //   weather.icon === "09n" ||
    //   weather.icon === "10d" ||
    //   weather.icon === "10n"
    // ) {
    //   iconSource = require(`./images/raining.png`);
    // } else if (weather.icon === "11d" || weather.icon === "11n") {
    //   iconSource = require(`./images/thunder.png`);
    // } else if (weather.icon === "13d" || weather.icon === "13n") {
    //   iconSource = require(`./images/snowing.png`);
    // } else if (weather.icon === "50d" || weather.icon === "50n") {
    //   iconSource = require(`./images/fog.png`);
    // }
    setSubmit(true);
    console.log(response);
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control search-input"
                type="search"
                placeholder="Enter a City"
                title="Search a city"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <button
                id="search-button"
                className="btn me-3"
                type="submit"
                title="Search button"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button
                id="geo-location"
                className="btn"
                type="submit"
                title="Geo-location button"
              >
                <i className="fa-solid fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </form>
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
            <LastUpdated currentDate={weather.date} />
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
                <img
                  className="current-weather-image"
                  src={weather.icon}
                  alt={weather.description}
                />
              </li>
              <li>{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let apiKey = "c30a0fffae157b2512a9a148a2b81dbf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
    return <p>loading...</p>;
  }
}
