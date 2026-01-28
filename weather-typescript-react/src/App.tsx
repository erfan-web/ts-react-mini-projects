import { useState } from "react";
import "./App.css";
import { fetchWeather } from "./utils/weatherAPI";
import WeatherCard, { type WeatherData } from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const [apiData, setApiData] = useState<WeatherData>();

  const submitHandler = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    const data = await fetchWeather(city);
    setApiData(data);
  };

  return (
    <div className="app">
      <h1>Erfan Weather App ⛅</h1>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {apiData && <WeatherCard weatherDetail={apiData} />}
    </div>
  );
}
