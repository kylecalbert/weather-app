import React, { useState, useEffect } from "react";
import "./App.css";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const API_KEY = "bd1e10f886aa95086bf83c63247820af";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&mode=json&units=metric&appid=${API_KEY}`;

  const getWeather = async () => {
    console.log("we are here first");
    // const data = await fetch(WEATHER_API).then((response) => response.json()
    const response = await fetch(WEATHER_API);
    const data = await response.json();
    setWeather(data);
    console.log(data);
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };
  return (
    <div className="app-container">
      <div className="header">
        <div className="title">
          <h1>Weather App</h1>
        </div>
        <div className="icon">
          <WiDayCloudyWindy className="icon fav" size="5rem" />
        </div>
      </div>
      <div className="search-nav">
        <form onSubmit={handleOnSubmit}>
          <input
            className="searchbar"
            type="text"
            onChange={handleOnChange}
            value={search}
          />
          <button className="search-button" type="submit">
            <FaSearch className="search-icon" size="1rem" />
          </button>
        </form>
      </div>

      <div className="content">
        {typeof weather.main != "undefined" ? (
          <div className="weather-info">
            <div className="general-details">
              <div className="weather-location">{weather.name}</div>
              <div className="temp-box">
                <div className="temp"> {Math.round(weather.main.temp)}°</div>
              </div>
              <div className="weather-icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                ></img>
              </div>
              <div className="weather-description">
                {weather.weather[0].description}
              </div>
            </div>

            <div className="specific-details">
              <div className="detail">
                <div className="title">Wind</div>
                <div className="value">{weather.wind.speed}</div>
              </div>

              <div className="detail">
                <div className="title">Humidity</div>
                <div className="value">{weather.main.humidity}</div>
              </div>
              <div className="detail">
                <div className="title">Pressure</div>
                <div className="value">{weather.main.pressure}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
