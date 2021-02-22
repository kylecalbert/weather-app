import React from "react";
import "./App.css";
import { WiDayCloudyWindy } from "react-icons/wi";
function App() {
  const api = {
    key: "bd1e10f886aa95086bf83c63247820af",
    base: "https://home.openweathermap.org/data/2.5",
  };
  return (
    <div className="app-container">
      <div className="header">
        <div className="icon">
          <WiDayCloudyWindy className="icon fav" size="10rem" />
        </div>
      </div>
      <div className="content">
        <div className="general_info">
          <div className="weather-status">Enter Location</div>
          <div className="weather-location">To Find Weather</div>
        </div>
        <div className="search-nav">
          <input className="searchbar" type="text" />
        </div>
        <div className="weather-details">
          <div className="detail">
            <div className="title">Wind</div>
            <div className="value">TBD</div>
          </div>

          <div className="detail bordered">
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
  );
}

export default App;
