import "./App.css";
import WeatherSearch from "./WeatherSearch";
import OpenSource from "./OpenSource";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <main>
          <WeatherSearch defaultCity="London" />
        </main>
      </div>
      <footer>
        <OpenSource />
      </footer>
    </div>
  );
}

export default App;
