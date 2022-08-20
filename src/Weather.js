import React from "react";
import "./Weather.css";

export default function Weather(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  return (
    <div className="Weather">
      <div className="card mx-auto">
        <div className="card-body">
          <h1 className="card-title">
            {props.city}
          </h1>
          <h6 className="card-subtitle mb-2">
            {day}
          </h6>
        </div>
        <h1 className="card-text text-center">
          <img
            src={props.icon}
            className="current-weather-emoji"
            alt={props.description}
          />
          <span className="degrees">
            {props.temperature}º
          </span>
        </h1>
        <h6 className="card-subtitle mb-2 weather-description text-center">
          {props.description}
        </h6>
      </div>
    </div>
  );
}
