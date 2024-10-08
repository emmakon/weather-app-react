import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./SearchWeather.css";

export default function SearchWeather() {
  const [city, setCity] = useState("San Fancisco");
  const [weather, SetWeather] = useState({});

  function shareResponse(response) {
    SetWeather(response.data);
  }

  function captureCity(event) {
    setCity(event.target.value);
  }

  function getResponse(event) {
    event.preventDefault();
    let apiKey = "bd3bb6534458ba51b48c49f5155745b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(shareResponse);
  }

  return (
    <div className="SearchWeather">
      <form onSubmit={getResponse}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              onChange={captureCity}
              className="search-bar"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="search-button" />
          </div>
        </div>
      </form>

      <WeatherInfo weatherData={weather} />
      <WeatherForecast weatherData={weather} />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/emmakon" target="_blank" rel="noreferrer">
          Emma Konrad
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/emmakon/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-app-react-ek.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
