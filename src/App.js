import React, { useState, useEffect } from "react";
import "./App.css";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const API_KEY = "bd1e10f886aa95086bf83c63247820af";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`;

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
        <div className="weather-info">
          <div className="general-details">
            <div className="weather-location">London</div>

            <div className="temp-box">
              <div className="temp">23c</div>
            </div>
            <div className="weather-icon">N/A</div>
            <div className="weather-description">Sunny</div>
            <div className="weather-date">27/2/21</div>
          </div>
          <div className="specific-details">
            <div className="detail">
              <div className="title">Wind</div>
              <div className="value">TBD</div>
            </div>

            <div className="detail">
              <div className="title">Temp</div>
              <div className="value">TBD</div>
            </div>
            <div className="detail">
              <div className="title">Percipitation</div>
              <div className="value">TBD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
