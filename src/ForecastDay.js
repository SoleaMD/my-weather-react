import React from "react";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(
      props.data.temp.max
    );
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(
      props.data.temp.min
    );
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <h6 className="card-subtitle mb-2">
        {day()}
      </h6>
      <h3 className="card-text">
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          className="current-weather-emoji"
          alt={props.data.weather[0].description}
        />{" "}
        <div>
          <span className="degrees">
            {maxTemperature()} /{" "}
            {minTemperature()}
          </span>
        </div>
      </h3>
      <h6 className="card-subtitle mb-2 weather-description">
        {props.data.weather[0].description}
      </h6>
    </div>
  );
}
