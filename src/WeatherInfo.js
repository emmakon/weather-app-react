import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherTemperature celsius={props.weatherData.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
