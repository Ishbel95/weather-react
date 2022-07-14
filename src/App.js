import "./App.css";
import WeatherSearch from "./WeatherSearch";
import OpenSource from "./OpenSource";

function App() {
  return (
    <div className="weather-app">
      <header className="App-header"></header>
      <WeatherSearch />
      <footer>
        <OpenSource />
      </footer>
    </div>
  );
}

export default App;
