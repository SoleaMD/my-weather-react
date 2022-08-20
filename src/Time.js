import React from "react";
import "./Time.css";

export default function Time(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="Time">
      <br />
      <h5 className="time-title">Time</h5>
      <h2 className="clock">
        <span>{hours}</span>:
        <span>{minutes}</span>
      </h2>
      <br />
      <div className="note">
        Temperature in Celsius
      </div>
    </div>
  );
}
