import React, { useState } from "react";
import axios from "axios";

import "./SearchWeather.css";

export default function SearchWeather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="SearchWeather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="search-bar"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="search-button" />
            </div>
          </div>
        </form>
        <div className="WeatherInfo">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>
                    <span>Tuesday 10:30</span> {weatherData.description}
                  </li>
                  <li>
                    Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                    <strong>{weatherData.wind}km/h</strong>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-8">
                <div className="temperature-container d-flex justify-content-end">
                  <img src={weatherData.icon} alt={weatherData.description} />
                  <div>
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="unit">°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WeatherForecast">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="WeatherForecastPreview">
                  <div className="forecast-time">Tue</div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon of current weather"
                  />
                  <div className="forecast-temperature">
                    <span className="forecast-temperature-max">17°</span>
                    <span className="forecast-temperature-min">14°</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="WeatherForecastPreview">
                  <div className="forecast-time">Tue</div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon of current weather"
                  />
                  <div className="forecast-temperature">
                    <span className="forecast-temperature-max">17°</span>
                    <span className="forecast-temperature-min">14°</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="WeatherForecastPreview">
                  <div className="forecast-time">Tue</div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon of current weather"
                  />
                  <div className="forecast-temperature">
                    <span className="forecast-temperature-max">17°</span>
                    <span className="forecast-temperature-min">14°</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="WeatherForecastPreview">
                  <div className="forecast-time">Tue</div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon of current weather"
                  />
                  <div className="forecast-temperature">
                    <span className="forecast-temperature-max">17°</span>
                    <span className="forecast-temperature-min">14°</span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="WeatherForecastPreview">
                  <div className="forecast-time">Tue</div>
                  <img
                    src="https://openweathermap.org/img/wn/10d@2x.png"
                    alt="icon of current weather"
                  />
                  <div className="forecast-temperature">
                    <span className="forecast-temperature-max">17°</span>
                    <span className="forecast-temperature-min">14°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    const apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
