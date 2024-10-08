import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>San Francisco</h1>
            <ul>
              <li>
                <span>Tuesday 12:32</span> clear sky
              </li>
              <li>
                Humidity: <strong>67%</strong>, Wind: <strong>2.06km/h</strong>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon of current weather"
            />
            <span className="temperature">20</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
