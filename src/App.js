import "./App.css";
import WeatherSearch from "./WeatherSearch";
import OpenSource from "./OpenSource";
import React from "react";

function App() {
  return (
    <div className="weather-app">
      <header className="App-header"></header>
      <main>
        <WeatherSearch defaultCity="London" />
      </main>
      <footer>
        <OpenSource />
      </footer>
    </div>
  );
}

export default App;
