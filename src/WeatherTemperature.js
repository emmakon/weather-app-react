import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  const [temperature, setTemperature] = useState(props.celsius);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature((props.celsius * 9) / 5 + 32);
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.celsius);
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(temperature)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(temperature)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
