import React from "react";
import "./App.css";
import { WiDayCloudyWindy } from "react-icons/wi";
import { FaSearch } from "react-icons/fa";

function App() {
  const api = {
    key: "bd1e10f886aa95086bf83c63247820af",
    base: "https://home.openweathermap.org/data/2.5",
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
        <input className="searchbar" type="text" />
        <button className="search-button" type="submit">
          <FaSearch className="search-icon" size="1rem" />
        </button>
      </div>

      <div className="content">
        <div className="weather-info">
          <div className="general-details">
            <div className="weather-location">N/A</div>
            <div className="weather-status">N/A</div>
            <div className="weather-icon">N/A</div>
            <div className="weather-description">N/A</div>
            <div className="weather-date">N/A</div>
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
