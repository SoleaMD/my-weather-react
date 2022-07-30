import React from "react";
import Temperature from "./Temperature";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    day: "Monday",
  };
  return (
    <div className="Weather">
      <div className="card mx-auto">
        <div className="card-body">
          <h1 className="card-title" id="city">
            {weatherData.city}
          </h1>
          <h6
            className="card-subtitle mb-2"
            id="current-day"
          >
            {weatherData.day}
          </h6>
        </div>
        <Temperature />
      </div>
    </div>
  );
}
