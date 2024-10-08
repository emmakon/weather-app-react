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
        <input
          type="search"
          placeholder="Enter a city"
          onChange={captureCity}
        />
        <input type="submit" value="search" />
      </form>
      <WeatherInfo weatherData={weather} />
      <WeatherForecast weatherData={weather} />
    </div>
  );
}
