import React from "react";
import "./Time.css";

export default function Time() {
  let time = {
    hour: 12,
    minutes: 30,
  };
  return (
    <div className="Time">
      <br />
      <h5 className="time-title">Time</h5>
      <h2 className="clock">
        <span id="hour">{time.hour}</span>:
        <span id="minutes">{time.minutes}</span>
      </h2>
      <br />
      <div className="note">
        Temperature in Celsius
      </div>
    </div>
  );
}
