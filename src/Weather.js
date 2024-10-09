import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(),
      coordinates: response.data.coordinates,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "b532784o70betf374c9ae221b35afa9b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="search-bar"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="search-button" />
            </div>
          </div>
        </form>
        <WeatherInfo weatherData={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
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
  } else {
    search();
    return "Loading...";
  }
}
