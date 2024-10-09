import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import "./SearchWeather.css";

export default function SearchWeather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(),
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
                  <li className="text-capitalize">
                    <span>
                      <FormattedDate date={weatherData.date} />
                    </span>
                    , {weatherData.description}
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
    const apiKey = "b532784o70betf374c9ae221b35afa9b";
    let city = "Vancouver";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
