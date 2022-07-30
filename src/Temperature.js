import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let temperatureData = {
    temperature: 19,
    description: "few clouds",
    iconUrl:
      "https://w7.pngwing.com/pngs/939/837/png-transparent-rain-weather-forecasting-overcast-cloud-cloudy-love-cloud-heart-thumbnail.png",
  };
  return (
    <div className="Temperature">
      <h1 className="card-text text-center">
        <img
          src={temperatureData.iconUrl}
          className="current-weather-emoji"
          alt=""
        />
        <span
          className="degrees"
          id="zero-day-degrees"
        >
          {temperatureData.temperature}º
        </span>
      </h1>
      <h6 className="card-subtitle mb-2 weather-description text-center">
        {temperatureData.description}
      </h6>
    </div>
  );
}
