import React from "react";
import "./Data.css";

export default function Data(props) {
  return (
    <div className="Data">
      <h6 className="humidity">
        Humidity: {props.humidity}%
      </h6>
      <h6 className="wind">
        Wind: {props.wind}km/h
      </h6>
      <h6 className="degrees-outside">
        Feels like: {props.degreesCurrent}º
      </h6>
      <h6 className="max-temperature">
        Highest: {props.degreesHigh}º
      </h6>
      <h6 className="min-temperature">
        Lowest: {props.degreesLow}º
      </h6>
    </div>
  );
}
