import React from "react";
import "./Data.css";

export default function Data() {
  let additionalData = {
    humidity: 80,
    wind: 4,
    degreesCurrent: 17,
    degreesHigh: 24,
    degreesLow: 15,
  };
  return (
    <div className="Data">
      <h6 className="humidity">
        Humidity: {additionalData.humidity}%
      </h6>
      <h6 className="wind">
        Wind: {additionalData.wind}km/h
      </h6>
      <h6 className="degrees-outside">
        Feels like:{" "}
        {additionalData.degreesCurrent}º
      </h6>
      <h6 className="max-temperature">
        Highest: {additionalData.degreesHigh}º
      </h6>
      <h6 className="min-temperature">
        Lowest: {additionalData.degreesLow}º
      </h6>
    </div>
  );
}
