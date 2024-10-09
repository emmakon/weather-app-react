import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.weatherData.city}</h1>
          <ul>
            <li className="text-capitalize">
              <span>
                <FormattedDate date={props.weatherData.date} />
              </span>
              , {props.weatherData.description}
            </li>
            <li>
              Humidity: <strong>{props.weatherData.humidity}%</strong>, Wind:{" "}
              <strong>{props.weatherData.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <img
              src={props.weatherData.icon}
              alt={props.weatherData.description}
            />
            <div>
              <span className="temperature">
                {Math.round(props.weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
