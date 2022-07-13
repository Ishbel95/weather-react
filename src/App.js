import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="weather-app">
      <header className="App-header"></header>
      <WeatherSearch />
      <footer>
        <div class="open-source-link">
          <span>
            <a
              href="https://github.com/Ishbel95/Vanilla-weather-app"
              target="_blank"
              rel="noreferrer"
              title="Github link"
            >
              Open-source code
            </a>
            {""} by Ishbel Fahey-Theaker-Front end Developer
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
