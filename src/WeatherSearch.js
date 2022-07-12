import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [submit, setSubmit] = useState(false);
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showWeather(response) {
    const iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setSubmit(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search a City"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (submit) {
    return (
      <div className="WeatherSearch">
        {form}
        <ul>
          <li>Temperature : {Math.round(temperature)}℃</li>
          <li>Description : {description}</li>
          <li>Humidity : {Math.round(humidity)}%</li>
          <li>Wind : {Math.round(wind)}km/h</li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <p>Weather for city is loading...</p>
      </div>
    );
  }
}
