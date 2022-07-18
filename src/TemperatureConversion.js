import React, { useState } from "react";
import "./TemperatureConversion.css";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");
  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ |
          <a
            href="/"
            onClick={convertFahrenheit}
            className="text-decoration-none"
            rel="noopener noreferrer"
          >
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="current-temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a
            href="/"
            onClick={convertCelsius}
            className="text-decoration-none"
            rel="noopener noreferrer"
          >
            ℃{" "}
          </a>
          | ℉
        </span>
      </div>
    );
  }
}
