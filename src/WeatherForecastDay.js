import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecast.temperature.minimum);
    return `${temperature}°`;
  }

  function displayDay() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let date = new Date(props.forecast.time * 1000);
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div className="WeatherForecastPreview">
      <div className="forecast-time">{displayDay()}</div>
      <img
        src={props.forecast.condition.icon_url}
        alt={props.forecast.condition.description}
      />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
