import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [submit, setSubmit] = useState(false);
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [feel, setFeel] = useState(null);
  const [icon, setIcon] = useState(null);

  function showWeather(response) {
    const iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setSubmit(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setFeel(response.data.main.feels_like);

    setIcon(iconUrl);
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
      <nav className="Navigation navbar navbar-light">
        <div className="container-fluid">
          <form className="d-flex" id="search-form" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter a City"
              id="search-input"
              title="Search a city"
              onChange={updateCity}
            />
            <button
              id="search-button"
              className="btn btn-outline-success"
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
        <h2>Last updated: 12:05</h2>
        <ul>
          <li>
            <i className="fa-solid fa-droplet"></i> : {Math.round(humidity)}%
          </li>
          <li>
            <i className="fa-solid fa-wind"></i> : {Math.round(wind)}km/h
          </li>
          <li>Feels like:{feel}℃</li>
          <li>{Math.round(temperature)}℃</li>
          <li>
            <img src={icon} alt={description} />
          </li>

          <li>{description}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="WeatherSearch">
        {form}
        <h1>{city}</h1>
        <ul>
          <li>Temperature : {Math.round(temperature)}℃</li>
          <li>Description : {description}</li>
          <li>
            <i className="fa-solid fa-droplet"></i> : {Math.round(humidity)}%
          </li>
          <li>Wind : {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  }
}
